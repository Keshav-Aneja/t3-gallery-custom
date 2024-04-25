const mockUrls = [
  "https://utfs.io/f/a1620782-44f2-4970-a80f-82af979228ed-8l80j2.png",
  "https://utfs.io/f/23deda95-b4e7-45df-b64b-5737baff2d51-8l80j1.png",
  "https://utfs.io/f/1bf7a065-74cd-43f1-9c86-fa7d612b6fbe-8l80j2.webp",
  "https://utfs.io/f/3385e3c4-a76a-4c4a-b971-487720869bcb-8l80iy.webp",
];
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div className="w-48" key={image.id}>
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
