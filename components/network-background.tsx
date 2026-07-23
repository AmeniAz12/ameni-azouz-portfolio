"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
}

/**
 * Subtle animated network of nodes and connecting lines.
 * Evokes cloud / infrastructure security without hacker clichés.
 * Respects prefers-reduced-motion.
 */
export function NetworkBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const drawingCanvas = canvas
    const drawingContext = ctx
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let width = 0
    let height = 0
    let nodes: Node[] = []
    let raf = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const parent = drawingCanvas.parentElement

    function resize() {
      const rect = parent?.getBoundingClientRect()
      width = rect?.width ?? window.innerWidth
      height = rect?.height ?? window.innerHeight
      drawingCanvas.width = width * dpr
      drawingCanvas.height = height * dpr
      drawingCanvas.style.width = `${width}px`
      drawingCanvas.style.height = `${height}px`
      drawingContext.setTransform(dpr, 0, 0, dpr, 0, 0)

      const density = Math.min(70, Math.floor((width * height) / 22000))
      nodes = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    const LINK_DIST = 140

    function draw() {
      drawingContext.clearRect(0, 0, width, height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.35
            drawingContext.strokeStyle = `rgba(90, 170, 235, ${alpha})`
            drawingContext.lineWidth = 1
            drawingContext.beginPath()
            drawingContext.moveTo(a.x, a.y)
            drawingContext.lineTo(b.x, b.y)
            drawingContext.stroke()
          }
        }
      }

      for (const n of nodes) {
        drawingContext.fillStyle = "rgba(120, 200, 245, 0.65)"
        drawingContext.beginPath()
        drawingContext.arc(n.x, n.y, 1.6, 0, Math.PI * 2)
        drawingContext.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    resize()

    if (reduceMotion) {
      // Draw a single static frame.
      draw()
      cancelAnimationFrame(raf)
    } else {
      draw()
    }

    window.addEventListener("resize", resize)
    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  )
}
