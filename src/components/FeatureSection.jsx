function FeatureCard({ title, description, imgSrc }) {
  return (
    <div className="bg-white px-4 py-4 w-64 text-center rounded-lg shadow-md shadow-gray-200 mt-6 cursor-pointer hover:shadow-lg hover:shadow-gray-300 transition-shadow duration-300">
      <img
        src={imgSrc}
        alt={title}
        className="h-16 w-16 mx-auto"
      />

      <h3 className="text-lg font-semibold mt-4">
        {title}
      </h3>

      <p className="text-sm text-gray-600 mt-2">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
