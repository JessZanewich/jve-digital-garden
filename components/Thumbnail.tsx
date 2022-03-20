import Link from 'next/link';
import Image from 'next/image';

type Image = {
  title: string;
  src: string;
  slug?: string;
};

const Thumbnail: React.FC<Image> = ({ title, src, slug }: Image) => {
  const image = (
    <Image
      height={720}
      width={1280}
      src={src}
      alt={`Thumbnail cover image ${title}`}
    />
  );

  return (
    <>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  );
};

export default Thumbnail;
