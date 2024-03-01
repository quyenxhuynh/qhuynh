import Link from '@/components/ui/Link';
import { Links } from './links';
import React from 'react';

export default function SocialMediaLinks() {
  return (
    <ul>
      {Links.map((link, index) => (
        <li key={index}>
          <Link external={link.external} href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
}
