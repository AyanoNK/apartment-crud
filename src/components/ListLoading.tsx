import { LinkIcon } from "@heroicons/react/24/solid";

const ListLoading = () => (
  <div className="border border-red-800 shadow rounded-md p-4 w-full mx-auto">
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-gray-700 rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-gray-700 rounded col-span-2"></div>
            <div className="h-2 bg-gray-700 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-gray-700 rounded"></div>
        </div>
      </div>
      <LinkIcon className="h-6 w-6 text-blue-700" />
    </div>
  </div>
);

export default ListLoading;
