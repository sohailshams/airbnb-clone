import Image from 'next/image';

function LiveCard({ img, title }) {
  return (
    <div>
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default LiveCard;
