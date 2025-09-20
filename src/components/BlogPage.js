import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../css/blogPage.css'
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import blog5 from '../assets/blog5.jpg'

const BlogPage = () => {

  const allBlogs = [
    {
      id: 4,
      title: 'Why More Families Are Choosing Starshine for Their First Smart TV?',
      description: `Buying your first Smart TV is more than just a purchase—it’s a moment of pride, joy, and excitement for every Indian family. Whether you’re moving into a new home, upgrading from a basic LED, or gifting it to your parents, the experience should be memorable and satisfying. That’s why more and more families are placing their trust in Starshine. <br /> <br />1. <strong>Built for Indian Homes</strong> <br /> <br />Our Smart TVs come equipped with features tailored for Indian households—from multi-language support to handling long hours of power usage. No matter the region or dialect, your family can enjoy content in their own language. <br /> <br />2. <strong>Durable and Trustworthy</strong> <br /> <br />With a 3-year warranty on Smart Televisions, Starshine goes above and beyond the industry standard. We understand Indian families use TVs extensively—for news, devotional programs, cartoons, YouTube recipes, and daily soaps. That’s why our TVs are built to last. <br /> <br />3. <strong>Affordable, Not Basic</strong> <br /> <br />You don’t need to break the bank for quality. Starshine Smart TVs come loaded with trending features at prices that respect your monthly budget. We keep things economical without compromising on innovation. <br /> <br />4. <strong>A Truly Indian Brand</strong> <br /> <br />Proudly manufactured by Arham Technologies Limited, Starshine TVs are designed keeping Indian conditions in mind—handling voltage fluctuations, heat, and even heavy usage. <br /> <br />5. <strong>Entertainment for All Generations</strong> <br /> <br />From kids learning rhymes to grandparents watching bhajans, Starshine Smart TVs become a part of daily family life. It’s not just a device; it’s a shared experience. Your first Smart TV should feel like a celebration, not a compromise. Starshine Smart TVs deliver quality, durability, and joy—all made in India. <br /> <br />Explore Starshine Smart Televisions today.`,
      image: blog1,
    },
    {
      id: 3,
      title: '5 Reasons Starshine Appliances Are Perfect for Young Indian Families',
      description: `Managing a household today is no small feat, especially for young Indian couples juggling work, kids, and daily chores. What makes a real difference is having reliable home appliances that simplify life. That’s where Starshine steps in. <br /> <br />1. <strong>Washing Machines that Understand Your Routine</strong> <br /> <br />Starshine Washing Machines are built for families that need both speed and care. Whether it’s school uniforms, daily wear, or delicate baby clothes—our machines handle it all with gentle efficiency. <br /> <br />2. <strong>Mixer Grinders That Keep Up With Your Recipes</strong> <br /> <br />From early morning chutneys to evening smoothies, our Mixer Grinders offer power, precision, and long-lasting performance. Ideal for the modern Indian kitchen. <br /> <br />3. <strong>Fans and Coolers That Beat the Indian Heat</strong> <br /> <br />Don’t let rising temperatures ruin your comfort. Our energy-efficient Ceiling Fans and Air Coolers are designed for high performance even in peak summers. <br /> <br />4. <strong>Style Meets Space</strong> <br /> <br />Young families often live in compact spaces. Our appliances are sleek, space-saving, and complement modern interiors beautifully. <br /> <br />5. <strong>Budget Friendly, Family Ready</strong> <br /> <br />Every Starshine product is affordably priced, giving you more value for your money. Because smart doesn’t have to mean expensive. <br /> <br />If you’re building a modern Indian home, you need appliances that can keep up with your life. With Starshine, you get reliability, performance, and affordability. <br /> <br />Upgrade your home with Starshine—smart living made easy.`,
      image: blog2,
    },
    {
      id: 2,
      title: 'The Journey Behind Every Starshine Product: Powered by Arham Technologies',
      description: 'What makes a Starshine product so dependable? The answer lies in the backbone of the brand: Arham Technologies Limited. As a public listed company with deep roots in electronics manufacturing, Arham ensures every product is more than just a machine—it’s a promise. <br /> <br />1. <strong>State-of-the-Art Infrastructure</strong> <br /> <br />From our 1-acre manufacturing facility to a 1K clean room environment, every inch of the Arham factory is built for quality. Each LED TV goes through an advanced aging process to test performance and durability before it reaches your home. <br /> <br />2. <strong>Legacy of Trust</strong> <br /> <br />With operations starting in 2013 and LED TV manufacturing since 2019, Arham Technologies brings more than a decade of experience and technical expertise to the table. <br /> <br />3. <strong>Quality Testing at Every Step</strong> <br /> <br />We don’t believe in shortcuts. Every product goes through rigorous inspections, performance testing, and quality control protocols. That’s why Starshine can confidently offer 3 to 5 years of warranty on major appliances. <br /> <br />4. <strong>A Team That Cares</strong> <br /> <br />Behind every fan, TV, or washing machine is a team of engineers, designers, and technicians who care about making products that last. We combine human insight with technology to deliver excellence. <br /> <br />5. <strong>Designed for Real Indian Needs</strong> <br /> <br />We understand how Indians use appliances—nonstop. That’s why our designs are made to withstand long hours, voltage fluctuations, and tough weather conditions. <br /> <br />A Starshine product is not just a consumer item; it is the result of Arham Technologies’ commitment to quality and customer satisfaction. <br /> <br />Experience the journey from factory to family. Choose Starshine.',
      image: blog3,
    },
    {
      id: 1,
      title: 'Made in India, Made for India: The Starshine Promise',
      description: 'In a market full of international names, Starshine stands tall as a truly Indian brand that designs, develops, and manufactures right here in India. <br /> <br />1. <strong>Our Story Begins at Home</strong> <br /> <br />Starshine started with a simple mission: to provide high-quality electronics to Indian consumers at honest prices. Today, we continue that journey with pride. <br /> <br />2. <strong>Made by Indians, for Indians</strong> <br /> <br />Everything from our Smart TVs to Mixer Grinders is made in India, ensuring job creation, economic growth, and national pride. <br /> <br />3. <strong>Backed by Arham Technologies Limited</strong> <br /> <br />With a manufacturing legacy dating back to 2013, Arham Technologies brings in advanced processes, clean-room environments, and robust testing protocols that few can match. <br /> <br />4. <strong>Built for Indian Homes and Habits</strong> <br /> <br />Our products are tested for high temperatures, frequent usage, and Indian electricity standards. They’re made to last in the real world. <br /> <br />5. <strong>Our Vision for the Future</strong> <br /> <br />We’re not stopping here. With every product, we’re expanding to more towns, supporting more families, and making India self-reliant in electronics. <br /> <br />When you buy Starshine, you’re not just choosing a product. You’re choosing India. <br /> <br />Support local. Choose proudly Indian. Choose Starshine.',
      image: blog5,
    }
  ]

  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const found = allBlogs.find((b) => b.id === parseInt(id));
    setBlog(found);
  }, [id])
  
  if (!blog) {
    return <div className="text-center my-5">Loading...</div>;
  }

  return (
    <div>
      <section className='blogPage1'>
        <h1 style={{marginTop: "20vh"}}><strong>{blog.title}</strong></h1>
      </section>

      <section className='container p-4'>
        <img src={blog.image} alt='...' />
      </section>

      <section className='container p-4' style={{ textAlign: 'left' }}>
        <div dangerouslySetInnerHTML={{ __html: blog.description }}>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
