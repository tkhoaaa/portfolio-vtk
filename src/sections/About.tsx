"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { stats } from "@/data/skills"
import { personalInfo } from "@/data/personal"

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return <span ref={ref}>{count}{suffix}</span>
}

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <SectionHeading
          title="About Me"
          subtitle="Là 1 lập trình viên Front-end Developer đam mê tìm tòi những thứ mới mẻ, nắm bắt mọi thứ xu hướng, tìm hiểu và học nhưng kiến thức mới và giao diện hiện đại cho các dự án."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-display font-semibold">
              Trải nghiệm thực tế các dự án và đam mê
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
              Tôi là một frontend developer với niềm đam mê tạo ra các ứng dụng web đẹp mắt, hiệu quả và lấy người dùng làm trung tâm. Hiện tại tôi đã tốt nghiệp và đang có mong muốn được ứng tuyển vào công ty để được học hỏi và dóng góp 1 phần cho công ty.
              </p>
              <p>
              Cách tiếp cận của tôi là sự kết hợp giữa chuyên môn kỹ thuật và sự thấu hiểu sâu sắc về trải nghiệm người
              dùng. Tôi tin rằng một sản phẩm phần mềm tuyệt vời không chỉ nằm ở code sạch, mà còn ở khả năng giải
              quyết những vấn đề thực tế và tạo ra những tương tác ý nghĩa khiến người dùng hài lòng.
              </p>
              <p>
              Khi không lập trình, tôi thường dành thời gian khám phá các công nghệ mới,
                tìm tòi những dự án mới, tìm hiểu những giao diện mới đang có trên thị trường
                và các thông tin hữu dịch trong cộng đồng developer.
              </p>
            </div>

            {/* Location & Availability */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                {personalInfo.availability}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                📍 {personalInfo.location}
              </div>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
