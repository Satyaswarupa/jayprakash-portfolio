"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Database,
  Cloud,
  Terminal,
  GitBranch,
  Server,
  ShieldCheck,
  Activity,
  MonitorCog,
} from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const skillCategories = [
    {
      title: 'Programming & Backend',
      icon: Database,
      skills: [
        { name: 'Java 8', level: 92 },
        { name: 'Spring Boot', level: 88 },
        { name: 'SQL', level: 90 },
        { name: 'Oracle 14c', level: 85 },
      ],
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 82 },
        { name: 'Linux', level: 90 },
        { name: 'Windows Server', level: 88 },
        { name: 'VMware', level: 80 },
      ],
    },
    {
      title: 'Monitoring & Support',
      icon: Activity,
      skills: [
        { name: 'Nagios', level: 85 },
        { name: 'Grafana', level: 85 },
        { name: 'Prometheus', level: 88 },
        { name: 'Splunk', level: 84 },
        { name: 'ELK Stack', level: 82 },
        { name: 'Kibana', level: 80 },
      ],
    },
    {
      title: 'DevOps & Operations',
      icon: GitBranch,
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 82 },
        { name: 'Jenkins', level: 88 },
        { name: 'GitHub Actions', level: 84 },
        { name: 'Git', level: 92 },
        { name: 'Maven', level: 86 },
        { name: 'Terraform', level: 78 },
        { name: 'Ansible', level: 80 },
        { name: 'Shell Scripting', level: 87 },
        { name: 'Python (Automation)', level: 75 },
        { name: 'SonarQube', level: 80 },
        { name: 'Trivy', level: 78 },
        { name: 'CI/CD', level: 89 },
        { name: 'Control-M', level: 88 },
      ],
    },
  ]

  const tools = [
    'Java 8',
    'Spring Boot',
    'SQL',
    'Oracle 14c',
    'AWS',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'GitHub Actions',
    'Git',
    'Maven',
    'Terraform',
    'Ansible',
    'Linux',
    'Shell Scripting',
    'Python',
    'JIRA',
    'ServiceNow',
    'Control-M',
    'Nagios',
    'Prometheus',
    'Grafana',
    'ELK Stack',
    'Kibana',
    'Splunk',
    'SonarQube',
    'Trivy',
    'VMware',
    'Putty',
    'ITIL Framework',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="section relative" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6366f1]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ec4899]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-[#6366f1] text-sm font-semibold tracking-wider uppercase mb-4 block">
              My Skills
            </span>

            <h2 className="section-title">
              Technical <span className="gradient-text">Expertise</span>
            </h2>

            <p className="section-subtitle mx-auto">
              Experienced in enterprise application support, cloud
              infrastructure, monitoring systems, database management,
              and production operations across BFSI and Fintech domains.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={itemVariants}
                className="card"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1]/20 to-[#ec4899]/20 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-[#6366f1]" />
                  </div>

                  <h3 className="text-xl font-bold font-['Space_Grotesk']">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-[#e2e8f0]">
                          {skill.name}
                        </span>

                        <span className="text-sm text-[#6366f1] font-semibold">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-2 bg-[#1a1a2e] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-[#6366f1] to-[#ec4899]"
                          initial={{ width: 0 }}
                          animate={
                            inView
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
                          transition={{
                            duration: 1.2,
                            delay: catIndex * 0.3 + skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-xl font-bold mb-8 font-['Space_Grotesk']">
              Tools & Technologies
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-5 py-2.5 rounded-xl glass text-sm font-medium text-[#94a3b8] hover:text-white hover:border-[#6366f1]/50 transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Extra Feature Cards */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-4 gap-6 mt-16"
          >
            <motion.div variants={itemVariants} className="card text-center">
              <Terminal className="w-10 h-10 text-[#6366f1] mx-auto mb-4" />
              <h4 className="font-bold mb-2">System Support</h4>
              <p className="text-sm text-[#94a3b8]">
                Linux administration & production troubleshooting
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="card text-center">
              <MonitorCog className="w-10 h-10 text-[#6366f1] mx-auto mb-4" />
              <h4 className="font-bold mb-2">Monitoring</h4>
              <p className="text-sm text-[#94a3b8]">
                Real-time monitoring using Prometheus, Grafana & ELK
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="card text-center">
              <Server className="w-10 h-10 text-[#6366f1] mx-auto mb-4" />
              <h4 className="font-bold mb-2">Enterprise Systems</h4>
              <p className="text-sm text-[#94a3b8]">
                Enterprise application support & deployments
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="card text-center">
              <ShieldCheck className="w-10 h-10 text-[#6366f1] mx-auto mb-4" />
              <h4 className="font-bold mb-2">ITIL Operations</h4>
              <p className="text-sm text-[#94a3b8]">
                Incident, change & problem management processes
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills