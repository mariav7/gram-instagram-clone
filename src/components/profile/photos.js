/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

const Photos = (props) => {
  const { photos } = props;
  return (
    <section className="flex flex-col">
      <div className="m-12">
        <div className="border-t border-gray-primary w-full flex justify-center">
          <button
            type="button"
            className="flex flex-row p-4 border-t border-black-primary focus:outline-none"
          >
            <div className="w-3 mr-1 tracking-widest">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <span className="font-semibold uppercase text-xs tracking-widest">posts</span>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4 mb-8">
          {!photos
            ? new Array(12).fill(0).map((_, i) => <Skeleton key={i} width={320} height={400} />)
            : photos.length > 0
            ? photos.map((photo) => (
                <div key={photo.docId} className="relative group cursor-pointer">
                  <img src={photo.imageSrc} alt={photo.caption} />
                  <div className="absolute bottom-0 left-0 bg-gray-200 z-10 w-full justify-evenly items-center h-full bg-black-faded group-hover:flex hidden">
                    <p className="flex items-center text-white font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-8 mr-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {photo.likes.length}
                    </p>
                    <p className="flex items-center text-white font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-8 mr-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {photo.comments.length}
                    </p>
                  </div>
                </div>
              ))
            : null}
        </div>
        {!photos ||
          (photos.length === 0 && <p className="text-center text-2xl">No Posts Yet ☹️</p>)}
      </div>
    </section>
  );
};

Photos.propTypes = {
  photos: PropTypes.array
};

export default Photos;
