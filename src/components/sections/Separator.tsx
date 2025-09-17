export default function Separator({ section }: { section: any }) {

  const removeMargin = section?.removeMargin;

  if (section?.fullWidth) {
    return (
      <>
        {section?.style === "Default" && (
          <hr className={`border-t border-gray-300 ${removeMargin ? 'my-0' : 'my-4'}`} />
        )}

        {section?.style === "Wide Line" && (
          <hr className={`border-t-4 border-gray-300 ${removeMargin ? 'my-0' : 'my-4'}`} />
        )}

        {section?.style === "Dots" && (
          <hr className={`border-t border-dotted border-gray-300 ${removeMargin ? 'my-0' : 'my-4'}`} />
        )}
      </>
    );
  }

  return (
    <div className="container">
      {section?.style === "Default" && (
        <hr className={`border-t border-gray-300 ${removeMargin ? 'my-0' : 'my-4'}`} />
      )}

      {section?.style === "Wide Line" && (
        <hr className={`border-t-4 border-gray-300 ${removeMargin ? 'my-0' : 'my-4'}`} />
      )}

      {section?.style === "Dots" && (
        <hr className={`border-t border-dotted border-gray-300 ${removeMargin ? 'my-0' : 'my-4'}`} />
      )}
    </div>
  );
}
