import "./styles.css";
import { useState } from "react";

const useDisclosure = (initialState = false, { onOpen, onClose } = {}) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = () => {
    setIsOpen(true);
    if (typeof onOpen === "function") {
      onOpen();
    }
  };

  const close = () => {
    setIsOpen(false);
    if (typeof onOpen === "function") {
      onClose();
    }
  };

  const toggle = () => {
    isOpen ? close() : open();
  };

  return { isOpen, toggle, open, close };
};

export default function App() {
  const { isOpen, toggle } = useDisclosure(false, {
    onOpen: () => console.log("я открылся"),
    onClose: () => console.log("я закрылся")
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={toggle}>Открыть блок с тестом</button>
      {isOpen && (
        <h2>
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est,
          qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit,
          sed quia non numquam eius modi tempora incidunt, ut labore et dolore
          magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
          nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
          aliquid ex ea commodi consequatur? Quis autem vel eum iure
          reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae
          consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla
          pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus,
          qui blanditiis praesentium voluptatum deleniti atque corrupti, quos
          dolores et quas molestias excepturi sint, obcaecati cupiditate non
          provident, similique sunt in culpa, qui officia deserunt mollitia
          animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
          est et expedita distinctio. Nam libero tempore, cum soluta nobis est
          eligendi optio, cumque nihil impedit, quo minus id, quod maxime
          placeat, facere possimus, omnis voluptas assumenda est, omnis dolor
          repellendus. Temporibus autem quibusdam et aut officiis debitis aut
          rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint
          et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat.
        </h2>
      )}
    </div>
  );
}
