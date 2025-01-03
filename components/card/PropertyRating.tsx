function PropertyRating({
  propertyId,
  inPage,
}: {
  propertyId: string;
  inPage: boolean;
}) {
  // temp
  const rating = 4.7;
  const count = 100;
  const className = `flex gap-1 items-center ${inPage ? "text-md" : "text-xs"}`;
  const countText = count > 1 ? "reviews" : "review";
  const countValue  = ``

  return <div>PropertyRating</div>;
}

export default PropertyRating;
