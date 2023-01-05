import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PostCard({post}) {
  return (
    <Link href={`/posts/${post.slug}`}>
        <div className="border rounded-lg overflow-hidden">
            <Image
                src={`/${post.frontMatter.img}`}
                width={1200}
                height={700}
                alt={post.frontMatter.title}
            />
        </div>
        <div className="px-2 py-4">
            <h1 className="font-bold text-lg">{post.frontMatter.title}</h1>
            <span>{post.frontMatter.date}</span>
        </div>
    </Link>
  )
}

export default PostCard