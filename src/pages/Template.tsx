import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";

import { Component as ArrowBackIcon } from "../assets/icons/arrow_back.svg";
import { Component as DeleteIcon } from "../assets/icons/delete.svg";
import { Component as KebabMenuIcon } from "../assets/icons/kebab_menu.svg";
import { Component as FavoriteBorderIcon } from "../assets/icons/favorite_border.svg";
import { Component as FavoriteIcon } from "../assets/icons/favorite.svg";

import Button from "../ui/Button";
import Modal from "../ui/Modal";

const Template: FunctionComponent = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleCloseModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <nav className="h-16 bg-white drop-shadow flex items-center px-4 gap-2">
        <button
          onClick={() => window.history.back()}
          className="rounded-full h-10 w-10 flex items-center justify-center"
        >
          <ArrowBackIcon />
        </button>
        <h1 className="relative text-xl font-semibold -top-0.5">Push A</h1>
        <div className="grow flex justify-end">
          {isFavorite ? (
            <FavoriteIcon
              onClick={() => setIsFavorite(false)}
              className="text-rose-400 fill-current"
            />
          ) : (
            <FavoriteBorderIcon
              onClick={() => setIsFavorite(true)}
              className="text-rose-400 fill-current"
            />
          )}
          <KebabMenuIcon />
        </div>
      </nav>
      <div className="flex flex-col h-[calc(100%-64px)] overflow-y-auto">
        {/* TODO(Bech) */}
      </div>
      <Modal isOpen={showDeleteModal} onClose={handleCloseModal}>
        <h1 className="text-xl font-semibold capitalize">Delete Template</h1>
        <p className="">
          Are you sure you wish to permanently delete your template?
        </p>
        <div className="flex mt-4 gap-2 justify-end">
          <button
            onClick={handleCloseModal}
            className="bg-neutral-100 px-4 h-10 rounded text-neutral-900 font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setShowDeleteModal(false);
              window.alert("Template removed!");
            }}
            className="flex items-center bg-red-500 px-4 h-10 rounded text-white font-semibold"
          >
            Delete
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Template;
