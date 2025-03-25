import type { ReactNode } from "react";

interface Props {
  text: ReactNode;
  canRefresh: boolean;
}

export const ProdErrorPage = ({ text, canRefresh }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        gap: "20px",
        padding: "20px",
      }}
    >
      {text}

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        {canRefresh && (
          <button
            style={{
              color: "blue",
              width: "fit-content",
            }}
            type="button"
            onClick={() => {
              window.location.reload();
            }}
          >
            Reload page
          </button>
        )}
      </div>
    </div>
  );
};
