import { IoLocationSharp } from "react-icons/io5";

const Card = (props: any) => {
  return (
    <div className="flex p-4 bg-white shadow-md rounded-lg">
      <div className="w-1/3 flex-shrink-0">
        <img
          src={props.imageUrl}
          alt={props.title}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="w-2/3 pl-4">
        <div className="flex items-center">
          <IoLocationSharp  className="text-red-500"/>
          <span className="block text-gray-600 mr-2">{props.location}</span>
          <a
            href={props.googleMapsUrl}
            className="text-gray-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <h3 className="text-xl font-bold mt-2 mb-2">{props.title}</h3>
        <p className="text-500">
          {props.startDate} - {props.endDate}
        </p>
        <p className="mt-2">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
