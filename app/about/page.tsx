// "use client";

// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Users, Target, Award, Zap, Brain, Shield } from "lucide-react";
// import Link from "next/link";
// import Footer from "@/components/footer";
// import Header from "@/components/header";

// const AboutUsPage = () => {
//   const values = [
//     {
//       icon: Brain,
//       title: "Innovation First",
//       description:
//         "We leverage cutting-edge AI technology to revolutionize the recruitment process and stay ahead of industry trends.",
//     },
//     {
//       icon: Users,
//       title: "People-Centric",
//       description:
//         "Our solutions are designed with both recruiters and candidates in mind, ensuring a seamless experience for all.",
//     },
//     {
//       icon: Target,
//       title: "Results Driven",
//       description:
//         "We focus on delivering measurable outcomes that help our clients achieve their hiring goals efficiently.",
//     },
//     {
//       icon: Shield,
//       title: "Trust & Security",
//       description:
//         "We maintain the highest standards of data security and privacy to protect sensitive recruitment information.",
//     },
//     {
//       icon: Zap,
//       title: "Speed & Efficiency",
//       description:
//         "Our AI-powered platform reduces time-to-hire while maintaining quality in candidate selection.",
//     },
//     {
//       icon: Award,
//       title: "Excellence",
//       description:
//         "We strive for excellence in everything we do, from product development to customer service.",
//     },
//   ];

//   const team = [
//     {
//       name: "Sarah Johnson",
//       role: "CEO & Founder",
//       image: "/placeholder.svg?height=300&width=300",
//       description:
//         "Former VP of Talent at Fortune 500 companies with 15+ years in recruitment technology.",
//     },
//     {
//       name: "Michael Chen",
//       role: "CTO",
//       image: "/placeholder.svg?height=300&width=300",
//       description:
//         "AI researcher and engineer with expertise in machine learning and natural language processing.",
//     },
//     {
//       name: "Emily Rodriguez",
//       role: "Head of Product",
//       image: "/placeholder.svg?height=300&width=300",
//       description:
//         "Product strategist with deep understanding of HR workflows and user experience design.",
//     },
//     {
//       name: "David Kim",
//       role: "Head of Sales",
//       image: "/placeholder.svg?height=300&width=300",
//       description:
//         "Sales leader with proven track record in B2B SaaS and enterprise software solutions.",
//     },
//   ];

//   return (
//     <>
//     <Header/>
//     <div className="min-h-screen bg-white">
//       {/* Our Story */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-4"
//           >
//             <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
//             <p className="text-gray-600">
//               Founded in 2020, AI 21 emerged from a simple observation: traditional recruitment processes were
//               time-consuming, inefficient, and often missed the best candidates. Our founders, with decades of combined
//               experience in HR technology and artificial intelligence, set out to change this.
//             </p>
//             <p className="text-gray-600">
//               We started with a vision to create 21 AI-powered products that would transform every aspect of the hiring
//               process. From intelligent candidate matching to automated interview scheduling, our platform has evolved
//               to become a comprehensive recruitment ecosystem.
//             </p>
//             <p className="text-gray-600">
//               Today, we serve over 500 companies worldwide, helping them find and hire the best talent while reducing
//               time-to-hire by up to 60%. Our commitment to innovation and excellence continues to drive us forward.
//             </p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <img
//               src="/placeholder.svg?height=400&width=600"
//               alt="AI 21 team"
//               className="rounded-lg shadow-lg w-full"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Our Values */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
//             <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
//               These core values guide everything we do and shape how we build products, serve customers, and grow as a
//               company.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {values.map((value, i) => {
//               const Icon = value.icon;
//               return (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: i * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <Card className="hover:shadow-lg transition">
//                     <CardContent className="p-6 space-y-4">
//                       <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
//                         <Icon className="text-red-600" />
//                       </div>
//                       <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
//                       <p className="text-gray-600 text-sm">{value.description}</p>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Meet Our Team */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
//             <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
//               Our diverse team of experts brings together decades of experience in AI, recruitment, and technology.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {team.map((member, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: i * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="text-center hover:shadow-lg transition">
//                   <CardContent className="p-6 space-y-4">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-24 h-24 rounded-full mx-auto object-cover"
//                     />
//                     <div>
//                       <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
//                       <p className="text-red-600 text-sm font-medium">{member.role}</p>
//                     </div>
//                     <p className="text-gray-600 text-sm">{member.description}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default AboutUsPage;
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Zap, Brain, Shield } from "lucide-react";
import Footer from "@/components/footer";
import Header from "@/components/header";

const AboutUsPage = () => {
  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description:
        "We leverage cutting-edge AI technology to revolutionize the recruitment process and stay ahead of industry trends.",
    },
    {
      icon: Users,
      title: "People-Centric",
      description:
        "Our solutions are designed with both recruiters and candidates in mind, ensuring a seamless experience for all.",
    },
    {
      icon: Target,
      title: "Results Driven",
      description:
        "We focus on delivering measurable outcomes that help our clients achieve their hiring goals efficiently.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "We maintain the highest standards of data security and privacy to protect sensitive recruitment information.",
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description:
        "Our AI-powered platform reduces time-to-hire while maintaining quality in candidate selection.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from product development to customer service.",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-red-50">
        {/* Our Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-gray-700">
                Founded in 2020, AI 21 emerged from a simple observation: traditional recruitment processes were
                time-consuming, inefficient, and often missed the best candidates. Our founders, with decades of combined
                experience in HR technology and artificial intelligence, set out to change this.
              </p>
              <p className="text-gray-700">
                We started with a vision to create 21 AI-powered products that would transform every aspect of the hiring
                process. From intelligent candidate matching to automated interview scheduling, our platform has evolved
                to become a comprehensive recruitment ecosystem.
              </p>
              <p className="text-gray-700">
                Today, we serve over 500 companies worldwide, helping them find and hire the best talent while reducing
                time-to-hire by up to 60%. Our commitment to innovation and excellence continues to drive us forward.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                These core values guide everything we do and shape how we build products, serve customers, and grow as a
                company.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-lg transition">
                      <CardContent className="p-6 space-y-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          <Icon className="text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                        <p className="text-gray-600 text-sm">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
