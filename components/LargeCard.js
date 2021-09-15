import Image from 'next/image';

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-6 cursor-pointer">
      <div className="relative h-96 min-w-[300]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
    </section>
  );
}

export default LargeCard;
