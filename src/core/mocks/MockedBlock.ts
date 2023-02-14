import Block from '../Block';

export class MockedBlock<P = {}> extends Block {
    constructor(props?: P) {
        super({ ...props });
    }

    render(): string {
        return '<div>It\'s my block</div>';
    }

    static componentDidUpdate = jest.fn();

    componentDidUpdate() {
        MockedBlock.componentDidUpdate();
        return true;
    }
}
