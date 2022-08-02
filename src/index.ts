// type intersection
type Draggble = {
  drag: () => void
};

type Resizable = {
  resize: () => void
};

type UIWidget = Draggble & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}





