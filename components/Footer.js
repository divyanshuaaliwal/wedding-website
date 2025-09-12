"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo & About */}
        <div className={styles.about}>
          <h2 className={styles.logo}>Shaadi</h2>
          <p>
            Connecting hearts and building meaningful relationships. Your love story starts here.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/stories">Success Stories</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <p>Email: support@shaadi.com</p>
          <p>Phone: +91 123 456 7890</p>
          <div className={styles.socials}>
            <Link href="#"><Facebook size={20} /></Link>
            <Link href="#"><Instagram size={20} /></Link>
            <Link href="#"><Twitter size={20} /></Link>
            <Link href="#"><Linkedin size={20} /></Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Shaadi.com. All rights reserved.</p>
      </div>
    </footer>
  );
}
