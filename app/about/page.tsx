// "use client";

// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Users, Target, Award, Zap, Brain, Shield } from "lucide-react";
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

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen bg-red-50">
//         {/* Our Story */}
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="space-y-4"
//             >
//               <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
//               <p className="text-gray-700">
//                 Founded in 2020, AI 21 emerged from a simple observation: traditional recruitment processes were
//                 time-consuming, inefficient, and often missed the best candidates. Our founders, with decades of combined
//                 experience in HR technology and artificial intelligence, set out to change this.
//               </p>
//               <p className="text-gray-700">
//                 We started with a vision to create 21 AI-powered products that would transform every aspect of the hiring
//                 process. From intelligent candidate matching to automated interview scheduling, our platform has evolved
//                 to become a comprehensive recruitment ecosystem.
//               </p>
//               <p className="text-gray-700">
//                 Today, we serve over 500 companies worldwide, helping them find and hire the best talent while reducing
//                 time-to-hire by up to 60%. Our commitment to innovation and excellence continues to drive us forward.
//               </p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
//                 alt="Our Story"
//                 className="rounded-lg shadow-lg w-full"
//               />
//             </motion.div>
//           </div>
//         </section>

//         {/* Our Values */}
//         <section className="py-20 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
//               <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
//                 These core values guide everything we do and shape how we build products, serve customers, and grow as a
//                 company.
//               </p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {values.map((value, i) => {
//                 const Icon = value.icon;
//                 return (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: i * 0.1 }}
//                     viewport={{ once: true }}
//                   >
//                     <Card className="hover:shadow-lg transition">
//                       <CardContent className="p-6 space-y-4">
//                         <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
//                           <Icon className="text-red-600" />
//                         </div>
//                         <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
//                         <p className="text-gray-600 text-sm">{value.description}</p>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
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
import Link from "next/link";

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

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-red-500 to-red-700 text-white text-center py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to unlock the power of real-time AI insights?
            </h2>
            <p className="mb-8 text-lg">
              Join 1000+ enterprise companies already using A21's specialized AI products to streamline
              operations, reduce costs, and accelerate growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 text-left text-base max-w-4xl mx-auto">
              <div>✅ 30-day free trial with full access</div>
              <div>✅ Dedicated enterprise support team</div>
              <div>✅ Custom integration assistance</div>
              <div>✅ Scalable pricing for any organization</div>
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/schedule-demo">
                <button className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-red-600 transition">
                  Schedule Demo
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
