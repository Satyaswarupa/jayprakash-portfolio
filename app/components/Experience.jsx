import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Briefcase,
  Calendar,
  MapPin,
} from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  })

  const experiences = [
    {
      company: 'Tavant',
      role: 'Senior Software Engineer',
      location: 'Bengaluru, Karnataka, India · Remote',
      duration: 'Aug 2025 - Present',
      description: [
        'Providing production support for Java-based enterprise applications with strong focus on Incident, Problem, and Change Management aligned with ITIL practices.',
        'Conducting Root Cause Analysis (RCA) and resolving high-severity P1/P2 production incidents.',
        'Monitoring application health metrics, batch jobs, and system stability using Prometheus, Grafana, and Kibana.',
        'Writing and optimizing SQL queries, troubleshooting database performance issues in Oracle and PostgreSQL.',
        'Managing deployments, database patching, and post-deployment validation with minimal downtime.',
        'Testing and validating REST APIs using Postman across multiple enterprise projects.',
      ],
      tech: [
        'Java 8',
        'PostgreSQL',
        'Oracle',
        'AWS',
        'Grafana',
        'Prometheus',
        'Kibana',
        'Postman',
        'JIRA',
        'ITIL',
      ],
      color: '#6366f1',
    },

    {
      company: 'Cognizant',
      role: 'Software Engineer',
      location: 'Bengaluru, Karnataka, India · Hybrid',
      duration: 'Jul 2023 - Jul 2025',
      description: [
        'Delivered L1/L2 production support for Java enterprise applications within SLA timelines.',
        'Managed P1/P2 incidents, coordinated bridge calls, and collaborated with multiple teams for issue resolution.',
        'Performed application log analysis, root cause analysis, and impact analysis after deployments.',
        'Supported application deployments, database patching, upgrades, and change management activities.',
        'Configured application monitoring and alerting systems based on business requirements.',
        'Prepared operational reports, SOPs, and AOD documentation while following ITIL v3 processes.',
      ],
      tech: [
        'Java',
        'AWS',
        'Linux',
        'ServiceNow',
        'JIRA',
        'SQL',
        'Control-M',
        'Splunk',
        'CI/CD',
        'Oracle',
      ],
      color: '#ec4899',
    },

    {
      company: 'Cognizant',
      role: 'Associate Software Engineer',
      location: 'Bengaluru, Karnataka, India',
      duration: 'Jul 2021 - Jun 2023',
      description: [
        'Provided 24x7 production support and participated in on-call rotations for critical incidents.',
        'Analyzed application job flows and monitored AutoSys batch jobs for business reports.',
        'Prepared complex SQL queries based on business requirements and troubleshooting needs.',
        'Handled ServiceNow incident tickets, problem tickets, and client work orders.',
        'Collaborated with SMEs and cross-functional teams to resolve recurring production issues.',
        'Participated in weekend production activities and post-release validations.',
      ],
      tech: [
        'SQL',
        'AutoSys',
        'ServiceNow',
        'Linux',
        'Java',
        'JIRA',
        'Production Support',
        'Troubleshooting',
        'Oracle',
      ],
      color: '#06b6d4',
    },

    {
      company: 'HulkHire',
      role: 'Java Trainee Intern',
      location: 'Remote',
      duration: 'Feb 2021 - Jul 2021',
      description: [
        'Worked on Payment Integration System development for secure online payment processing.',
        'Integrated multiple payment gateways for flexible transaction handling.',
        'Implemented backend services using Spring Boot and Spring Data JPA.',
        'Focused on secure transaction flow and API integration for e-commerce platforms.',
      ],
      tech: [
        'Spring Boot',
        'Spring Data JPA',
        'REST API',
        'Java',
        'MySQL',
      ],
      color: '#f59e0b',
    },

    {
      company: 'Ashok IT',
      role: 'Spring Boot & Microservices Trainee',
      location: 'Hyderabad, Telangana, India',
      duration: 'Nov 2020 - Feb 2021',
      description: [
        'Completed hands-on training in Spring Boot and Microservices architecture.',
        'Worked on backend API development and enterprise Java concepts.',
        'Learned Docker basics and deployment workflow.',
      ],
      tech: [
        'Spring Boot',
        'Microservices',
        'Docker',
        'Java',
      ],
      color: '#8b5cf6',
    },

    {
      company: 'Naresh i Technologies',
      role: 'Java Full Stack Trainee',
      location: 'Hyderabad, Telangana, India',
      duration: 'Jul 2020 - Nov 2020',
      description: [
        'Completed training in Core Java, HTML, CSS, JavaScript, and JSP.',
        'Built foundational web applications using frontend and backend technologies.',
        'Strengthened programming fundamentals and database concepts.',
      ],
      tech: [
        'Core Java',
        'HTML',
        'CSS',
        'JavaScript',
        'JSP',
      ],
      color: '#14b8a6',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="experience"
      className="section relative"
      ref={ref}
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#6366f1]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ec4899]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <span className="text-[#6366f1] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Work History
            </span>

            <h2 className="section-title">
              Professional{' '}
              <span className="gradient-text">
                Experience
              </span>
            </h2>

            <p className="section-subtitle mx-auto">
              My journey in enterprise software engineering,
              production support, cloud infrastructure,
              and application operations across BFSI and
              Fintech domains.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366f1] via-[#ec4899] to-[#06b6d4] md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-[#0f0f23] z-10 md:-translate-x-1/2"
                  style={{ backgroundColor: exp.color }}
                />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card */}
                <div className="md:w-1/2 pl-12 md:pl-0">
                  <motion.div
                    className="card group"
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${exp.color}20, ${exp.color}10)`,
                            border: `1px solid ${exp.color}30`,
                          }}
                        >
                          <Briefcase
                            className="w-6 h-6"
                            style={{ color: exp.color }}
                          />
                        </div>

                        <div>
                          <h3 className="text-lg font-bold font-['Space_Grotesk']">
                            {exp.role}
                          </h3>

                          <p className="text-[#6366f1] font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-[#94a3b8]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-5">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-[#94a3b8] leading-relaxed"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                            style={{
                              backgroundColor: exp.color,
                            }}
                          />

                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-medium"
                          style={{
                            background: `${exp.color}15`,
                            color: exp.color,
                            border: `1px solid ${exp.color}25`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience