import type { NextPage } from 'next';
import Link from 'next/link';
import Thumbnail from '../components/Thumbnail';
import { IPost } from '../types/posts';

type Props = {
  posts: [IPost];
};

const Garden: NextPage<Props> = ({ posts }: Props) => {
  return (
    <div>
      This is the Garden
      <div>
        {/* {posts.map((post) => (
          <div key={post.slug}>
            <div>
              <Thumbnail
                slug={post.slug}
                title={post.title}
                src={post.thumbnail}
              />
            </div>

            <h2>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h2>

            <p>{post.description}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Garden;
