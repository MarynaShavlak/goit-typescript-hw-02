// /*
//   Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
// */

interface Props {
  title: string;
}

class Component<T extends Props> {
  constructor(public props: T) {}
}

class Page<T extends Props> extends Component<T> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
