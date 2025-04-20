import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // This is a static example, in a real app you would fetch the blog post based on the slug
  const blogPosts = {
    "precision-metal-casting-innovations": {
      title: "Precision Metal Casting Innovations: Breaking New Ground in Manufacturing",
      category: "MANUFACTURING TECHNOLOGY",
      author: "Jonathan Fox",
      date: "May 6, 2023",
      image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg",
      content: `
        <h2>The Evolution of Precision Casting in Modern Manufacturing</h2>
        <p>Precision metal casting has undergone a remarkable transformation in recent years, with technological advancements pushing the boundaries of what's possible in manufacturing. At White Rock Foundry, we're at the forefront of these innovations, implementing cutting-edge techniques that enhance precision, reduce waste, and improve overall product quality.</p>
        
        <h3>1. Digital Simulation and Modeling</h3>
        <p>One of the most significant advancements in precision casting is the use of sophisticated digital simulation tools. These technologies allow engineers to model the entire casting process virtually before any physical work begins. By simulating how molten metal will flow and solidify within a mold, we can identify potential issues such as porosity, shrinkage, or incomplete fills before they occur in production.</p>
        
        <h3>2. Advanced Alloy Development</h3>
        <p>The development of new metal alloys has revolutionized what's possible in precision casting. These innovative materials offer enhanced properties such as improved strength-to-weight ratios, better corrosion resistance, and higher temperature tolerance. Our metallurgists work continuously to develop and test new alloy compositions that meet the increasingly demanding requirements of aerospace, automotive, and medical industries.</p>
        
        <h3>3. 3D Printing in Pattern and Mold Creation</h3>
        <p>Additive manufacturing technologies have transformed pattern and mold making in the casting industry. 3D printing allows for the creation of highly complex patterns with unprecedented accuracy. This technology has significantly reduced lead times for prototyping and small production runs, enabling more iterative design processes and faster time-to-market for new products.</p>
        
        <h3>4. Vacuum-Assisted Casting</h3>
        <p>Vacuum-assisted casting techniques have dramatically improved the quality of precision cast parts. By removing air from the mold cavity before pouring molten metal, we can significantly reduce porosity and oxide inclusions. This results in stronger, more reliable castings with improved surface finish and dimensional accuracy.</p>
        
        <h3>5. Real-Time Monitoring and Quality Control</h3>
        <p>The integration of IoT sensors and real-time monitoring systems has revolutionized quality control in precision casting. These technologies allow for continuous monitoring of critical parameters such as temperature, pressure, and cooling rates throughout the casting process. Any deviations from optimal conditions can be immediately identified and corrected, ensuring consistent quality across production runs.</p>
        
        <h3>The Future of Precision Casting</h3>
        <p>Looking ahead, the future of precision casting is incredibly promising. Emerging technologies such as AI-driven process optimization, advanced robotics for automation, and new sustainable materials are set to further transform the industry. At White Rock Foundry, we're committed to staying at the cutting edge of these developments, continuously investing in research and development to deliver the highest quality precision castings to our clients.</p>
        
        <h3>Conclusion</h3>
        <p>Precision metal casting continues to evolve at a rapid pace, driven by technological innovation and increasing demands for higher quality, more complex components. By embracing these advancements, manufacturers can achieve levels of precision, efficiency, and quality that were previously impossible. As we move forward, the companies that thrive will be those that successfully integrate these new technologies while maintaining a focus on craftsmanship and expertise that has always been at the heart of quality casting.</p>
      `,
    },
    "sustainable-manufacturing-practices": {
      title: "Sustainable Manufacturing Practices in Modern Foundry Operations",
      category: "SUSTAINABILITY",
      author: "Emily Carter",
      date: "June 12, 2023",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      content: `
        <h2>Embracing Sustainability in Metal Manufacturing</h2>
        <p>The manufacturing industry, particularly metal foundries, has traditionally been associated with high energy consumption and environmental impact. However, at White Rock Foundry, we're leading the charge in implementing sustainable practices that reduce our ecological footprint while maintaining the highest standards of quality and efficiency.</p>
        
        <h3>1. Energy Efficiency Innovations</h3>
        <p>Energy consumption represents one of the largest environmental impacts in foundry operations. Modern foundries are implementing a range of technologies to reduce energy usage, from high-efficiency induction furnaces to waste heat recovery systems. At our facilities, we've installed advanced energy management systems that optimize power consumption in real-time, resulting in a 30% reduction in energy use over the past five years.</p>
        
        <h3>2. Closed-Loop Water Systems</h3>
        <p>Water conservation is another critical aspect of sustainable foundry operations. Our state-of-the-art closed-loop water systems recycle and reuse water throughout the manufacturing process, dramatically reducing freshwater consumption. Advanced filtration and treatment technologies ensure that any water eventually discharged meets or exceeds environmental regulations.</p>
        
        <h3>3. Metal Recycling and Waste Reduction</h3>
        <p>Metal casting is inherently conducive to recycling, as scrap and runners can be remelted and reused. We've taken this principle further by implementing comprehensive waste reduction programs that minimize material waste at every stage of production. Our advanced simulation software helps optimize gating and riser systems, reducing excess metal while ensuring perfect fills.</p>
        
        <h3>4. Sustainable Sand Reclamation</h3>
        <p>For sand casting operations, sand reclamation represents a significant opportunity for sustainability improvements. Our thermal and mechanical reclamation systems allow us to reuse up to 95% of our sand, dramatically reducing waste sent to landfills. The small amount of waste sand that cannot be reclaimed is repurposed for construction applications rather than disposed of.</p>
        
        <h3>5. Low-Emission Binders and Coatings</h3>
        <p>Traditional foundry binders and coatings often contain volatile organic compounds (VOCs) that contribute to air pollution. We've transitioned to water-based and inorganic binder systems that significantly reduce emissions while maintaining or improving casting quality. These advanced materials not only benefit the environment but also create healthier working conditions for our employees.</p>
        
        <h3>6. Life Cycle Assessment and Continuous Improvement</h3>
        <p>Sustainability is not a destination but a journey of continuous improvement. We regularly conduct comprehensive life cycle assessments of our products and processes to identify opportunities for environmental improvements. This data-driven approach ensures that our sustainability efforts are focused where they can have the greatest impact.</p>
        
        <h3>The Business Case for Sustainability</h3>
        <p>It's important to note that these sustainability initiatives aren't just good for the planet—they're good for business. Energy efficiency reduces operating costs, waste reduction improves material utilization, and sustainable practices help attract and retain both customers and employees who value environmental responsibility. Our experience has shown that sustainability and profitability go hand in hand.</p>
        
        <h3>Conclusion</h3>
        <p>The future of foundry operations lies in sustainable manufacturing practices that reduce environmental impact while improving efficiency and quality. By embracing these innovations, White Rock Foundry is demonstrating that traditional manufacturing can be transformed into a model of environmental responsibility without compromising on performance or profitability. As we continue to innovate and improve, we invite our industry colleagues to join us in building a more sustainable future for metal manufacturing.</p>
      `,
    },
    "digital-transformation-in-engineering": {
      title: "Digital Transformation in Engineering: Revolutionizing Design and Production",
      category: "TECHNOLOGY & INNOVATION",
      author: "Michael O'Connell",
      date: "July 23, 2023",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      content: `
        <h2>The Digital Revolution in Engineering and Manufacturing</h2>
        <p>Digital transformation is fundamentally changing how engineering firms design, test, and manufacture products. At White Rock Foundry, we've embraced this revolution, implementing cutting-edge digital technologies that enhance our capabilities and deliver superior results for our clients.</p>
        
        <h3>1. Advanced CAD/CAM Integration</h3>
        <p>The seamless integration of Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM) systems has dramatically streamlined the product development process. Our engineers work with sophisticated 3D modeling software that allows for incredibly detailed design work, which then flows directly into our manufacturing systems. This integration eliminates translation errors and ensures that the final product precisely matches the original design intent.</p>
        
        <h3>2. Digital Twin Technology</h3>
        <p>Digital twin technology creates virtual replicas of physical products and manufacturing processes, allowing for comprehensive simulation and testing before any physical production begins. We utilize digital twins to optimize product designs, predict performance under various conditions, and identify potential manufacturing challenges. This approach significantly reduces development time and costs while improving final product quality.</p>
        
        <h3>3. AI-Powered Design Optimization</h3>
        <p>Artificial intelligence and machine learning algorithms are revolutionizing engineering design. Our AI-powered design optimization tools can generate and evaluate thousands of design variations based on specified parameters and constraints. This generative design approach often produces innovative solutions that human engineers might not have considered, leading to lighter, stronger, and more efficient components.</p>
        
        <h3>4. IoT and Smart Manufacturing</h3>
        <p>The Internet of Things (IoT) has enabled the creation of smart, connected manufacturing environments. Our production facilities are equipped with networks of sensors that continuously monitor equipment performance, environmental conditions, and product quality. This real-time data allows for immediate adjustments to manufacturing parameters, predictive maintenance of equipment, and comprehensive quality control.</p>
        
        <h3>5. Augmented Reality in Engineering</h3>
        <p>Augmented reality (AR) tools are transforming how engineers visualize, design, and troubleshoot products. Our teams use AR headsets to overlay digital information onto physical objects, allowing them to see inside complex assemblies, identify potential interference issues, and visualize how components will fit together before they're manufactured. This technology is particularly valuable for training new staff and collaborating with clients on design reviews.</p>
        
        <h3>6. Blockchain for Supply Chain Transparency</h3>
        <p>Blockchain technology is enhancing transparency and traceability throughout the engineering supply chain. We're implementing blockchain solutions to create immutable records of material sourcing, manufacturing processes, and quality testing. This provides our clients with complete confidence in the provenance and quality of their products, which is particularly important for critical applications in aerospace and medical industries.</p>
        
        <h3>Overcoming Digital Transformation Challenges</h3>
        <p>While the benefits of digital transformation are clear, the journey is not without challenges. Successful implementation requires significant investment in technology, training, and organizational change. At White Rock Foundry, we've approached this transformation methodically, focusing on building digital literacy across our workforce and ensuring that new technologies align with our core business objectives.</p>
        
        <h3>Conclusion</h3>
        <p>Digital transformation is not merely about adopting new technologies—it's about fundamentally rethinking how engineering and manufacturing businesses operate in the digital age. By embracing these innovations, White Rock Foundry has enhanced our ability to deliver complex, high-quality products with greater efficiency and precision than ever before. As digital technologies continue to evolve, we remain committed to staying at the forefront of this revolution, continuously exploring new ways to leverage digital tools to create value for our clients and maintain our competitive edge in the global marketplace.</p>
      `,
    },
    "advanced-materials-in-engineering": {
      title: "Advanced Materials in Engineering: Pushing the Boundaries of Performance",
      category: "MATERIALS SCIENCE",
      author: "Sarah Johnson",
      date: "August 15, 2023",
      image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg",
      content: `
        <h2>The Material Revolution in Modern Engineering</h2>
        <p>The development and application of advanced materials is transforming what's possible in engineering and manufacturing. At White Rock Foundry, we're constantly exploring new materials that can help our clients overcome challenges and achieve breakthrough performance in their products.</p>
        
        <h3>1. High-Performance Metal Alloys</h3>
        <p>Recent advances in metallurgy have produced alloys with unprecedented combinations of strength, weight, and durability. Our metallurgists work with nickel-based superalloys that maintain their properties at extreme temperatures, making them ideal for aerospace and power generation applications. Similarly, advanced aluminum and titanium alloys offer exceptional strength-to-weight ratios that enable more efficient, fuel-saving designs in transportation applications.</p>
        
        <h3>2. Composite Materials</h3>
        <p>Composite materials, particularly carbon fiber reinforced polymers (CFRPs), have revolutionized structural design across industries. These materials combine the light weight of polymers with the strength of reinforcing fibers, creating components that outperform traditional metals in many applications. We've developed specialized techniques for integrating metal and composite components, allowing our clients to leverage the unique advantages of each material in hybrid structures.</p>
        
        <h3>3. Nanomaterials and Their Applications</h3>
        <p>Nanomaterials—materials engineered at the nanoscale (1-100 nanometers)—are opening new frontiers in engineering. By manipulating materials at this scale, we can create products with remarkable properties. For example, nano-enhanced coatings provide unprecedented wear resistance for industrial components, while nanomaterial additives can dramatically improve the strength and conductivity of traditional materials.</p>
        
        <h3>4. Biomimetic Materials</h3>
        <p>Nature has spent billions of years evolving efficient, resilient structures, and engineers are increasingly looking to biological systems for inspiration. Biomimetic materials mimic the structures and properties found in nature. We're exploring applications such as self-healing materials inspired by human skin, ultra-strong adhesives based on gecko feet, and impact-resistant structures that mimic the architecture of seashells.</p>
        
        <h3>5. Smart and Responsive Materials</h3>
        <p>Smart materials that can sense and respond to their environment are transforming product design. Shape memory alloys that return to their original form when heated, piezoelectric materials that generate electricity when stressed, and magnetorheological fluids that change viscosity in response to magnetic fields are just a few examples of the smart materials we're incorporating into advanced engineering solutions.</p>
        
        <h3>6. Sustainable and Biodegradable Materials</h3>
        <p>As environmental concerns become increasingly important, we're developing and implementing more sustainable material solutions. This includes biodegradable polymers for temporary applications, materials derived from renewable resources rather than petroleum, and designs that facilitate recycling and reuse at end-of-life.</p>
        
        <h3>Material Selection and Engineering</h3>
        <p>With this expanding universe of material options, material selection has become an increasingly complex and critical aspect of the engineering process. Our materials engineers use sophisticated modeling and simulation tools to evaluate how different materials will perform under specific operating conditions, helping to identify the optimal material for each application based on performance requirements, cost constraints, and sustainability considerations.</p>
        
        <h3>Conclusion</h3>
        <p>The rapid evolution of advanced materials is enabling engineering solutions that would have been impossible just a few years ago. At White Rock Foundry, we're committed to staying at the forefront of materials science, continuously exploring new materials and applications that can help our clients achieve their goals. By combining cutting-edge materials with our expertise in design and manufacturing, we're helping to create products that are stronger, lighter, more efficient, and more sustainable than ever before.</p>
      `,
    },
    "quality-control-in-precision-manufacturing": {
      title: "Quality Control in Precision Manufacturing: Ensuring Excellence at Every Step",
      category: "QUALITY ASSURANCE",
      author: "Daniel Morgan",
      date: "September 8, 2023",
      image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg",
      content: `
        <h2>The Critical Role of Quality Control in Modern Manufacturing</h2>
        <p>In precision manufacturing, quality isn't just a goal—it's a fundamental requirement. At White Rock Foundry, we've developed comprehensive quality control systems that ensure excellence at every stage of the manufacturing process, from initial design through final inspection and delivery.</p>
        
        <h3>1. Design for Quality</h3>
        <p>Quality control begins long before manufacturing starts. Our Design for Manufacturing (DFM) approach incorporates quality considerations from the earliest stages of product development. By analyzing designs for potential manufacturing challenges and building in features that facilitate inspection and testing, we can prevent quality issues rather than merely detecting them later. This proactive approach significantly reduces defects and rework while improving overall product reliability.</p>
        
        <h3>2. Advanced Metrology and Inspection Technologies</h3>
        <p>Precision manufacturing requires precision measurement. Our quality control laboratories are equipped with state-of-the-art metrology equipment, including coordinate measuring machines (CMMs), optical measurement systems, and 3D scanners capable of micron-level accuracy. These technologies allow us to verify complex geometries and tight tolerances with confidence, ensuring that every component meets exact specifications.</p>
        
        <h3>3. Non-Destructive Testing Methods</h3>
        <p>For critical components where failure is not an option, we employ a range of non-destructive testing (NDT) methods to verify internal integrity without damaging the parts. These include X-ray and CT scanning to detect internal voids or inclusions, ultrasonic testing to identify subsurface flaws, and dye penetrant inspection to reveal surface discontinuities. These techniques allow us to validate the quality of components that cannot be adequately assessed through dimensional inspection alone.</p>
        
        <h3>4. Statistical Process Control</h3>
        <p>Rather than relying solely on final inspection, we implement Statistical Process Control (SPC) throughout our manufacturing operations. By continuously monitoring key process parameters and product characteristics, we can identify trends and variations before they result in defects. This data-driven approach allows for real-time process adjustments and continuous improvement, leading to consistently higher quality and reduced variation.</p>
        
        <h3>5. Material Certification and Traceability</h3>
        <p>For many applications, particularly in aerospace, defense, and medical industries, material verification and traceability are essential aspects of quality control. Our comprehensive material management system ensures that all raw materials are properly certified and that complete traceability is maintained throughout the manufacturing process. This allows us to document the exact material composition and processing history of every component we produce.</p>
        
        <h3>6. Automated Inspection Systems</h3>
        <p>Automation is increasingly important in quality control, allowing for 100% inspection of critical features without adding significant time or cost. We've implemented vision systems, laser measurement, and other automated inspection technologies that can rapidly verify dimensions, surface conditions, and other quality attributes. These systems not only improve detection of defects but also generate valuable data for process improvement.</p>
        
        <h3>7. Quality Management Systems and Certification</h3>
        <p>Underlying all our quality control activities is a robust quality management system certified to international standards including ISO 9001, AS9100 for aerospace applications, and ISO 13485 for medical devices. These certifications reflect our commitment to maintaining the highest standards of quality and continuous improvement throughout our organization.</p>
        
        <h3>The Economics of Quality</h3>
        <p>While comprehensive quality control requires significant investment, the economics are compelling. The cost of preventing defects is invariably lower than the cost of detecting and correcting them later—and far lower than the cost of field failures. Our quality systems not only ensure customer satisfaction but also improve efficiency by reducing scrap, rework, and warranty claims.</p>
        
        <h3>Conclusion</h3>
        <p>In precision manufacturing, quality is not an add-on or a department—it's a philosophy that permeates every aspect of the organization. At White Rock Foundry, our commitment to quality control ensures that our clients receive components and assemblies that meet or exceed their specifications, perform reliably in the field, and support their reputation for excellence. As manufacturing technologies continue to advance, we remain dedicated to evolving our quality systems to maintain the highest standards of precision and reliability in everything we produce.</p>
      `,
    },
  }

  const post = blogPosts[params.slug] || blogPosts["precision-metal-casting-innovations"]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-[#0a3b25] text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              White Rock Foundry
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-yellow-300">
              HOME
            </Link>
            <Link href="/about" className="text-white hover:text-yellow-300">
              ABOUT
            </Link>
            <Link href="/services" className="text-white hover:text-yellow-300">
              SERVICES
            </Link>
            <Link href="/projects" className="text-white hover:text-yellow-300">
              PORTFOLIO
            </Link>
            <Link href="#" className="text-white hover:text-yellow-300">
              ALL PAGES
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-4 py-2">
              CONTACT
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow bg-gray-50">
        {/* Blog Post Header */}
        <section className="bg-[#0a3b25] text-white py-12">
          <div className="container mx-auto px-4">
            <div className="inline-block bg-white text-[#0a3b25] text-sm px-3 py-1 rounded-sm mb-4">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-heading">{post.title}</h1>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                    alt={post.author}
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm">{post.author}</span>
              </div>
              <span className="text-sm">{post.date}</span>
            </div>
          </div>
        </section>

        {/* Blog Post Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="mb-8">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>

                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <Link
                        href="#"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#0a3b25] hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </Link>
                      <Link
                        href="#"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#0a3b25] hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </Link>
                      <Link
                        href="#"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#0a3b25] hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      </Link>
                      <Link
                        href="#"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#0a3b25] hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </Link>
                    </div>
                    <span className="text-sm text-gray-500">Read us on socials:</span>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6 font-heading">Engineering Excellence & Innovation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                      <div className="relative h-40">
                        <Image
                          src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                          alt="Precision Metal Casting"
                          width={300}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span className="mr-4">May 6, 2023</span>
                        </div>
                        <h4 className="font-bold mb-2">Precision Metal Casting Innovations</h4>
                        <Link
                          href="/blog/precision-metal-casting-innovations"
                          className="text-[#0a3b25] font-medium hover:underline uppercase text-xs"
                        >
                          READ POST →
                        </Link>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                      <div className="relative h-40">
                        <Image
                          src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                          alt="Sustainable Manufacturing"
                          width={300}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span className="mr-4">June 12, 2023</span>
                        </div>
                        <h4 className="font-bold mb-2">Sustainable Manufacturing Practices</h4>
                        <Link
                          href="/blog/sustainable-manufacturing-practices"
                          className="text-[#0a3b25] font-medium hover:underline uppercase text-xs"
                        >
                          READ POST →
                        </Link>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                      <div className="relative h-40">
                        <Image
                          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                          alt="Digital Transformation"
                          width={300}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span className="mr-4">July 23, 2023</span>
                        </div>
                        <h4 className="font-bold mb-2">Digital Transformation in Engineering</h4>
                        <Link
                          href="/blog/digital-transformation-in-engineering"
                          className="text-[#0a3b25] font-medium hover:underline uppercase text-xs"
                        >
                          READ POST →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="font-bold text-lg mb-4">Recent Posts</h3>
                  <ul className="space-y-4">
                    <li>
                      <div className="flex items-start space-x-3">
                        <div className="w-16 h-16 flex-shrink-0">
                          <Image
                            src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                            alt="Precision Metal Casting"
                            width={64}
                            height={64}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">May 6, 2023</p>
                          <Link
                            href="/blog/precision-metal-casting-innovations"
                            className="font-medium hover:text-[#0a3b25]"
                          >
                            Precision Metal Casting Innovations
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start space-x-3">
                        <div className="w-16 h-16 flex-shrink-0">
                          <Image
                            src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                            alt="Sustainable Manufacturing"
                            width={64}
                            height={64}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">June 12, 2023</p>
                          <Link
                            href="/blog/sustainable-manufacturing-practices"
                            className="font-medium hover:text-[#0a3b25]"
                          >
                            Sustainable Manufacturing Practices
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start space-x-3">
                        <div className="w-16 h-16 flex-shrink-0">
                          <Image
                            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                            alt="Digital Transformation"
                            width={64}
                            height={64}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">July 23, 2023</p>
                          <Link
                            href="/blog/digital-transformation-in-engineering"
                            className="font-medium hover:text-[#0a3b25]"
                          >
                            Digital Transformation in Engineering
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-4">Categories</h3>
                  <div className="space-y-2">
                    <Link
                      href="/blog/categories/manufacturing-technology"
                      className="inline-block bg-[#0a3b25] text-white text-sm px-3 py-1 rounded-sm mr-2 mb-2"
                    >
                      MANUFACTURING TECHNOLOGY
                    </Link>
                    <Link
                      href="/blog/categories/sustainability"
                      className="inline-block bg-[#0a3b25] text-white text-sm px-3 py-1 rounded-sm mr-2 mb-2"
                    >
                      SUSTAINABILITY
                    </Link>
                    <Link
                      href="/blog/categories/technology-innovation"
                      className="inline-block bg-[#0a3b25] text-white text-sm px-3 py-1 rounded-sm mr-2 mb-2"
                    >
                      TECHNOLOGY & INNOVATION
                    </Link>
                    <Link
                      href="/blog/categories/materials-science"
                      className="inline-block bg-[#0a3b25] text-white text-sm px-3 py-1 rounded-sm mr-2 mb-2"
                    >
                      MATERIALS SCIENCE
                    </Link>
                    <Link
                      href="/blog/categories/quality-assurance"
                      className="inline-block bg-[#0a3b25] text-white text-sm px-3 py-1 rounded-sm mr-2 mb-2"
                    >
                      QUALITY ASSURANCE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-400 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
              alt="Background texture"
              width={1920}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
                From concept to creation,
                <br />
                we've got <span className="underline">you covered</span>.
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Contact us today to experience precision engineering solutions tailored to your manufacturing needs!
              </p>
              <div className="flex justify-center">
                <div className="relative">
                  <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                    GET STARTED
                  </Button>
                  <div className="absolute -right-16 -top-16">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 rounded-full border-2 border-[#0a3b25] animate-spin-slow"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs text-[#0a3b25] font-bold">GET STARTED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-[#0a3b25] py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold mb-4">White Rock Foundry</h2>
            <p className="max-w-md mx-auto text-gray-600">
              Precision engineering solutions for modern manufacturing challenges
            </p>
            <div className="mt-6 max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a3b25] rounded-l-sm"
              />
              <Button className="bg-black hover:bg-black/90 text-white font-medium rounded-r-sm rounded-l-none">
                SUBSCRIBE
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/about" className="text-gray-600 hover:text-[#0a3b25]">
                ABOUT US
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-[#0a3b25]">
                PRICING
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-[#0a3b25]">
                SERVICES
              </Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-[#0a3b25]">
                PORTFOLIO
              </Link>
              <Link href="/career" className="text-gray-600 hover:text-[#0a3b25]">
                CAREER
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-[#0a3b25]">
                FAQ
              </Link>
              <Link href="/shop" className="text-gray-600 hover:text-[#0a3b25]">
                SHOP
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#0a3b25]">
                CONTACT US
              </Link>
            </div>
            <p className="text-gray-500 text-sm">
              © 2023 White Rock Foundry. All Rights Reserved.{" "}
              <Link href="#" className="underline">
                Licensing
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
