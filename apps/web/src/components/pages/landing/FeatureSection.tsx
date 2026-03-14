"use client";

import { motion } from "framer-motion";
import { CheckCircle, LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import Link from "next/link";

// Use semantic color tokens and consistent font/spacing per Header & globals.css

interface FeatureSectionProps {
  media: ReactNode;
  title: string | ReactNode;
  icon: LucideIcon;
  listItems: string[];
  isMediaFirst?: boolean;
  mediaLink?: string;
  mediaClassName?: string;
  contentClassName?: string;
}

export default function FeatureSection({
  media,
  title,
  icon: Icon,
  listItems,
  isMediaFirst = false,
  mediaLink,
  mediaClassName = "",
  contentClassName = "",
}: FeatureSectionProps) {
  const mediaContent = (
    <motion.div
      initial={{ opacity: 0, x: isMediaFirst ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={`flex-1 ${mediaClassName}`}
    >
      {media}
    </motion.div>
  );

  const contentSection = (
    <motion.div
      initial={{ opacity: 0, x: isMediaFirst ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`space-y-6 flex-1 ${contentClassName}`}
    >
      <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-3 tracking-tight leading-tight">
        <Icon size={24} className="text-indigo-600 mt-1" />
        {title}
      </h3>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-3 text-zinc-600 dark:text-zinc-300"
      >
        {listItems.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: isMediaFirst ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            className="flex items-center gap-3 font-medium"
          >
            <CheckCircle className="w-5 h-5 text-indigo-600" />
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`flex ${
        isMediaFirst ? "flex-col-reverse" : "flex-col"
      } lg:flex-row gap-12 lg:items-center justify-between mb-20`}
    >
      {isMediaFirst ? (
        <>
          {mediaLink ? (
            <Link
              href={mediaLink}
              className="lg:w-1/2 block hover:underline focus:outline-none"
              tabIndex={0}
            >
              {mediaContent}
            </Link>
          ) : (
            mediaContent
          )}
          {contentSection}
        </>
      ) : (
        <>
          {contentSection}
          {mediaLink ? (
            <Link
              href={mediaLink}
              className="lg:w-1/2 block hover:underline focus:outline-none"
              tabIndex={0}
            >
              {mediaContent}
            </Link>
          ) : (
            mediaContent
          )}
        </>
      )}
    </motion.div>
  );
}
