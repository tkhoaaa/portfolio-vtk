 Các file cần chỉnh sửa

  1. Thông tin cá nhân

  Mở file src/data/personal.ts:

  export const personalInfo = {
    name: "Nguyen Van A",        // ← Tên của bạn
    role: "Frontend Developer",  // ← Vai trò của bạn
    subtitle: "Building digital experiences with passion & precision",
    bio: "I'm a frontend developer...", // ← Mô tả về bạn
    avatar: "https://...",       // ← Link ảnh profile của bạn
    email: "hello@example.com",  // ← Email của bạn
    location: "Ho Chi Minh City, Vietnam",
    availability: "Available for freelance projects",
  }

  export const socials = {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourhandle",
    email: "mailto:youremail@gmail.com",
  }

  2. Projects

  Mở file src/data/projects.ts - Thay đổi mảng projects:

  {
    id: "1",
    title: "Tên dự án",
    description: "Mô tả ngắn",
    longDescription: "Mô tả chi tiết",
    image: "https://link-anh-project.jpg",
    tech: ["React", "TypeScript", "Node.js"],
    category: "web",  // hoặc "mobile", "open-source"
    demoUrl: "https://demo-link.com",
    githubUrl: "https://github.com/yourrepo",
    featured: true,    // true nếu muốn hiển thị nổi bật
  }

  3. Skills

  Mở file src/data/skills.ts - Thay đổi mảng skills và stats:

  // Thêm kỹ năng mới
  { name: "Tên công nghệ", icon: "tên-icon", description: "Mô tả", category: "frontend" }

  // Icon có thể dùng: react, typescript, nextjs, vue, tailwind, nodejs, docker, git, figma, v.v.

  // Thay đổi stats
  export const stats = [
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Projects Completed", value: 30, suffix: "+" },
    // ...
  ]

  4. Experience

  Mở file src/data/experience.ts:

  {
    id: "1",
    company: "Tên công ty",
    role: "Vai trò của bạn",
    period: "2022 - Present",
    description: "Mô tả công việc",
    highlights: [
      "Điểm nổi bật 1",
      "Điểm nổi bật 2",
    ],
  }

  5. Testimonials

  Mở file src/data/testimonials.ts:

  {
    id: "1",
    name: "Tên người đánh giá",
    role: "Vai trò",
    company: "Công ty",
    avatar: "https://link-anh-nguoi-danh-gia.jpg",
    quote: "Nội dung đánh giá",
  }

  ---
  Cách chạy và kiểm tra

  # Chạy development server
  npm run dev