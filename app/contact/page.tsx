// // "use client"

// // import React, { useState } from "react"
// // import Header from "../../components/header"
// // import Footer from "../../components/footer"
// // import { Button } from "../../components/ui/button"
// // import { Input } from "../../components/ui/input"
// // import { Textarea } from "../../components/ui/textarea"
// // import { Card, CardContent } from "../../components/ui/card"
// // import {
// //   MapPin,
// //   Mail,
// //   Facebook,
// //   Twitter,
// //   Youtube,
// //   Instagram,
// // } from "lucide-react"

// // export default function ContactPage() {
// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     message: "",
// //   })

// //   const [isSubmitting, setIsSubmitting] = useState(false)

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     const { name, value } = e.target
// //     setFormData((prev) => ({ ...prev, [name]: value }))
// //   }

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault()
// //     setIsSubmitting(true)
// //     await new Promise((resolve) => setTimeout(resolve, 1000))
// //     setFormData({ firstName: "", lastName: "", email: "", message: "" })
// //     setIsSubmitting(false)
// //     alert("Thank you for your message! We'll get back to you soon.")
// //   }

// //   return (
// //     <div className="min-h-screen bg-red-50">
// //       <div className="backdrop-brightness-95 backdrop-blur-sm">
// //         <Header />

// //         {/* Banner with updated Pexels background image */}
// //         <div
// //           className="w-full h-[300px] md:h-[400px] bg-cover bg-center relative"
// //           style={{
// //             backgroundImage:
// //               "url('https://images.pexels.com/photos/6153345/pexels-photo-6153345.jpeg?auto=compress&cs=tinysrgb&w=1600')",
// //           }}
// //         >
// //           <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
// //             <h1 className="text-4xl md:text-5xl font-bold text-white">
// //               Contact Us
// //             </h1>
// //           </div>
// //         </div>

// //         <main className="py-10 px-4 md:px-8 lg:px-16">
// //           <div className="max-w-6xl mx-auto">
// //             <p className="text-gray-600 mb-10 text-lg text-center">
// //               Get in touch with us if you share our enthusiasm about the
// //               potential.
// //             </p>

// //             <div className="grid md:grid-cols-2 gap-12">
// //               {/* Left Section */}
// //               <div>
// //                 <h3 className="text-2xl font-semibold text-red-700 mb-4">
// //                   Thank you for your interest in AI 21
// //                 </h3>
// //                 <p className="text-gray-700 mb-4">
// //                   At AI 21, we're always eager to hear from you. Whether you
// //                   have questions, feedback, or insights, your voice is valuable
// //                   to us.
// //                 </p>
// //                 <p className="mb-2 text-gray-700">
// //                   Reach out directly via email at:{" "}
// //                   <a
// //                     href="mailto:info AI 21@gmail.com"
// //                     className="text-red-600"
// //                   >
// //                     info AI 21@gmail.com
// //                   </a>
// //                 </p>
// //                 <p className="text-gray-700">
// //                   Our team is dedicated to providing timely and thoughtful
// //                   responses to all inquiries. Whether you're seeking more
// //                   information, need support, or want to explore potential
// //                   collaborations, we're here to listen and engage.
// //                 </p>

// //                 <h4 className="mt-10 text-xl font-semibold text-red-700 mb-2">
// //                   Discover More About Us
// //                 </h4>
// //                 <p className="text-gray-700">
// //                   Curious to learn more about the vision, team, and technology
// //                   behind AI 21? Visit our About Us page to discover our ethos
// //                   and how we're transforming the field service management
// //                   industry with AI and ML solutions.
// //                 </p>

// //                 <div className="mt-6 space-y-4">
// //                   <div className="flex items-center space-x-3">
// //                     <MapPin className="text-red-600" />
// //                     <span className="text-gray-700">Mumbai</span>
// //                   </div>
// //                   <div className="flex items-center space-x-3">
// //                     <Mail className="text-red-600" />
// //                     <a
// //                       href="mailto:info AI 21@gmail.com"
// //                       className="text-red-600"
// //                     >
// //                       info AI 21@gmail.com
// //                     </a>
// //                   </div>
// //                 </div>

// //                 <div className="mt-6">
// //                   <h4 className="text-lg font-semibold text-red-700 mb-2">
// //                     Follow Us
// //                   </h4>
// //                   <div className="flex space-x-4">
// //                     {[Twitter, Facebook, Youtube, Instagram].map((Icon, idx) => (
// //                       <a
// //                         key={idx}
// //                         href="#"
// //                         className="w-9 h-9 flex items-center justify-center bg-red-50 rounded-full text-red-600 hover:bg-red-100"
// //                       >
// //                         <Icon className="w-5 h-5" />
// //                       </a>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Right Section - Contact Form */}
// //               <Card className="bg-white shadow-md">
// //                 <CardContent className="p-6">
// //                   <form onSubmit={handleSubmit} className="space-y-5">
// //                     <div className="grid md:grid-cols-2 gap-4">
// //                       <Input
// //                         type="text"
// //                         name="firstName"
// //                         value={formData.firstName}
// //                         onChange={handleInputChange}
// //                         required
// //                         placeholder="First Name"
// //                       />
// //                       <Input
// //                         type="text"
// //                         name="lastName"
// //                         value={formData.lastName}
// //                         onChange={handleInputChange}
// //                         required
// //                         placeholder="Last Name"
// //                       />
// //                     </div>
// //                     <Input
// //                       type="Official Email"
// //                       name="Official Email"
// //                       value={formData.email}
// //                       onChange={handleInputChange}
// //                       required
// //                       placeholder="Official Email"
// //                     />
// //                     <Input
// //                       type="Company Name"
// //                       name="Company Name"
// //                       value={formData.email}
// //                       onChange={handleInputChange}
// //                       required
// //                       placeholder="Company Name"
// //                     />
// //                     <Textarea
// //                       name="message"
// //                       value={formData.message}
// //                       onChange={handleInputChange}
// //                       required
// //                       placeholder="Availability For Call"
// //                       rows={5}
// //                     />
// //                     <Button
// //                       type="submit"
// //                       className="w-full bg-red-700 hover:bg-red-800 text-white text-lg"
// //                       disabled={isSubmitting}
// //                     >
// //                       {isSubmitting ? "Submitting..." : "Submit"}
// //                     </Button>
// //                   </form>
// //                 </CardContent>
// //               </Card>
// //             </div>
// //           </div>
// //         </main>

// //         <Footer />
// //       </div>
// //     </div>
// //   )
// // }
// "use client";

// import React, { useState } from "react";
// import Header from "../../components/header";
// import Footer from "../../components/footer";
// import { Button } from "../../components/ui/button";
// import { Input } from "../../components/ui/input";
// import { Textarea } from "../../components/ui/textarea";
// import { Card, CardContent } from "../../components/ui/card";
// import {
//   MapPin,
//   Mail,
//   Facebook,
//   Twitter,
//   Youtube,
//   Instagram,
// } from "lucide-react";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     company: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       company: "",
//       message: "",
//     });
//     setIsSubmitting(false);
//     alert("Thank you for your message! We'll get back to you soon.");
//   };

//   return (
//     <div className="min-h-screen bg-red-50">
//       <div className="backdrop-brightness-95 backdrop-blur-sm">
//         <Header />

//         {/* Banner */}
//         <div
//           className="w-full h-[300px] md:h-[400px] bg-cover bg-center relative"
//           style={{
//             backgroundImage:
//               "url('https://images.pexels.com/photos/6153345/pexels-photo-6153345.jpeg?auto=compress&cs=tinysrgb&w=1600')",
//           }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//             <h1 className="text-4xl md:text-5xl font-bold text-white">
//               Contact Us
//             </h1>
//           </div>
//         </div>

//         <main className="py-10 px-4 md:px-8 lg:px-16">
//           <div className="max-w-6xl mx-auto">
//             <p className="text-gray-600 mb-10 text-lg text-center">
//               Get in touch with us if you share our enthusiasm about the
//               potential.
//             </p>

//             <div className="grid md:grid-cols-2 gap-12">
//               {/* Left Section */}
//               <div>
//                 <h3 className="text-2xl font-semibold text-red-700 mb-4">
//                   Thank you for your interest in AI 21
//                 </h3>
//                 <p className="text-gray-700 mb-4">
//                   At AI 21, we're always eager to hear from you. Whether you
//                   have questions, feedback, or insights, your voice is valuable
//                   to us.
//                 </p>
//                 <p className="mb-2 text-gray-700">
//                   Reach out directly via email at:{" "}
//                   <a
//                     href="mailto:infoAI21@gmail.com"
//                     className="text-red-600"
//                   >
//                     infoAI21@gmail.com
//                   </a>
//                 </p>
//                 <p className="text-gray-700">
//                   Our team is dedicated to providing timely and thoughtful
//                   responses to all inquiries. Whether you're seeking more
//                   information, need support, or want to explore potential
//                   collaborations, we're here to listen and engage.
//                 </p>

//                 <h4 className="mt-10 text-xl font-semibold text-red-700 mb-2">
//                   Discover More About Us
//                 </h4>
//                 <p className="text-gray-700">
//                   Curious to learn more about the vision, team, and technology
//                   behind AI 21? Visit our About Us page to discover our ethos
//                   and how we're transforming the field service management
//                   industry with AI and ML solutions.
//                 </p>

//                 <div className="mt-6 space-y-4">
//                   <div className="flex items-center space-x-3">
//                     <MapPin className="text-red-600" />
//                     <span className="text-gray-700">Mumbai</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <Mail className="text-red-600" />
//                     <a
//                       href="mailto:infoAI21@gmail.com"
//                       className="text-red-600"
//                     >
//                       infoAI21@gmail.com
//                     </a>
//                   </div>
//                 </div>

//                 <div className="mt-6">
//                   <h4 className="text-lg font-semibold text-red-700 mb-2">
//                     Follow Us
//                   </h4>
//                   <div className="flex space-x-4">
//                     {[Twitter, Facebook, Youtube, Instagram].map((Icon, idx) => (
//                       <a
//                         key={idx}
//                         href="#"
//                         className="w-9 h-9 flex items-center justify-center bg-red-50 rounded-full text-red-600 hover:bg-red-100"
//                       >
//                         <Icon className="w-5 h-5" />
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Right Section - Contact Form */}
//               <Card className="bg-white shadow-md">
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-semibold text-red-700 mb-4">
//                     Feel free to reach us by filling out the form below
//                   </h3>
//                   <form onSubmit={handleSubmit} className="space-y-5">
//                     <div className="grid md:grid-cols-2 gap-4">
//                       <Input
//                         type="text"
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleInputChange}
//                         required
//                         placeholder="First Name"
//                       />
//                       <Input
//                         type="text"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleInputChange}
//                         required
//                         placeholder="Last Name"
//                       />
//                     </div>
//                     <Input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                       placeholder="Official Email"
//                     />
//                     <Input
//                       type="text"
//                       name="company"
//                       value={formData.company}
//                       onChange={handleInputChange}
//                       required
//                       placeholder="Company Name"
//                     />
//                     <Textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       required
//                       placeholder="Availability For Call"
//                       rows={5}
//                     />
//                     <Button
//                       type="submit"
//                       className="w-full bg-red-700 hover:bg-red-800 text-white text-lg"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? "Submitting..." : "Submit"}
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </main>

//         <Footer />
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Card, CardContent } from "../../components/ui/card";
import {
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    });
    setIsSubmitting(false);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-red-50">
      <div className="backdrop-brightness-95 backdrop-blur-sm">
        <Header />

        {/* Banner */}
        <div
          className="w-full h-[300px] md:h-[400px] bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/6153345/pexels-photo-6153345.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Contact Us
            </h1>
          </div>
        </div>

        <main className="py-10 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <p className="text-gray-600 mb-10 text-lg text-center">
              Get in touch with us if you share our enthusiasm about the
              potential.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Section */}
              <div>
                <h3 className="text-2xl font-semibold text-red-700 mb-4">
                  Thank you for your interest in AI 21
                </h3>
                <p className="text-gray-700 mb-4">
                  At AI 21, we're always eager to hear from you. Whether you
                  have questions, feedback, or insights, your voice is valuable
                  to us.
                </p>
                <p className="mb-2 text-gray-700">
                  Reach out directly via email at:{" "}
                  <a
                    href="mailto:infoAI21@gmail.com"
                    className="text-red-600"
                  >
                    infoAI21@gmail.com
                  </a>
                </p>
                <p className="text-gray-700">
                  Our team is dedicated to providing timely and thoughtful
                  responses to all inquiries. Whether you're seeking more
                  information, need support, or want to explore potential
                  collaborations, we're here to listen and engage.
                </p>

                <h4 className="mt-10 text-xl font-semibold text-red-700 mb-2">
                  Discover More About Us
                </h4>
                <p className="text-gray-700">
                  Curious to learn more about the vision, team, and technology
                  behind AI 21? Visit our About Us page to discover our ethos
                  and how we're transforming the field service management
                  industry with AI and ML solutions.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-red-600" />
                    <span className="text-gray-700">Mumbai</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-red-600" />
                    <a
                      href="mailto:infoAI21@gmail.com"
                      className="text-red-600"
                    >
                      infoAI21@gmail.com
                    </a>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-red-700 mb-2">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center bg-red-50 rounded-full text-red-600 hover:bg-red-100"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center bg-red-50 rounded-full text-red-600 hover:bg-red-100"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center bg-red-50 rounded-full text-red-600 hover:bg-red-100"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center bg-red-50 rounded-full text-red-600 hover:bg-red-100"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Section - Contact Form */}
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-red-700 mb-4">
                    Feel free to reach us by filling out the form below
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="First Name"
                      />
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Last Name"
                      />
                    </div>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Official Email"
                    />
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      placeholder="Company Name"
                    />
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Availability For Call"
                      rows={5}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-red-700 hover:bg-red-800 text-white text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
