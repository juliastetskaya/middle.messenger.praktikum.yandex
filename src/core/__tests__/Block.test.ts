import Block from '../Block';
import { MockedBlock } from '../mocks/MockedBlock';

describe('Block', () => {
    it('should return content', () => {
        const block = new MockedBlock();
        const content = block.getContent();

        expect(content?.outerHTML).toBe('<div>It\'s my block</div>');
    });

    it('should set props', () => {
        const block = new Block({ userName: 'Fedor' });

        block.setProps({ userName: 'Ivan' });

        expect(block.getProps()).toEqual({ userName: 'Ivan' });
    });

    it('setProps calls componentDidUpdate method', () => {
        const block = new MockedBlock();

        block.setProps({ userName: 'Ivan' });

        expect(MockedBlock.componentDidUpdate).toHaveBeenCalledTimes(1);
    });
});
