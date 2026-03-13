export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  highlights: string[]
  logo?: string
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Đại học Công nghệ thành phố Hồ Chí Minh",
    role: "Sinh viên",
    period: "2022 - Present",
    description: "Là 1 sinh viên tôi đã tham gia nhiều hoạt động tại trường và các hoạt động thể thao tại trường ",
    highlights: [
      "Led team of 5 developers building a $2M ARR product",
      "Reduced load time by 40% through optimization",
      "Implemented design system used across 8 products",
    ],
  },
  {
    id: "2",
    company: "StartupHub",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description: "Built and maintained multiple client projects from scratch, handling both frontend and backend development.",
    highlights: [
      "Delivered 15+ client projects on time",
      "Built real-time collaboration features",
      "Introduced CI/CD pipeline reducing deploy time by 60%",
    ],
  },
  {
    id: "3",
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "2019 - 2020",
    description: "Developed responsive websites and web applications for various clients across different industries.",
    highlights: [
      "Created 20+ responsive websites",
      "Mastered modern CSS and animation techniques",
      "Won 3 design awards for client projects",
    ],
  },
  {
    id: "4",
    company: "Freelance",
    role: "Independent Developer",
    period: "2018 - 2019",
    description: "Started professional journey as a freelance web developer, working with small businesses and startups.",
    highlights: [
      "Completed 10+ freelance projects",
      "Built strong foundation in React",
      "Developed client communication skills",
    ],
  },
]
