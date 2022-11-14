import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('should render', () => {
        render(<Button>Test 123</Button>);

        expect(screen.getByTestId('button')).toBeInTheDocument();
        // expect(screen.getByTestId('button')).toBeInTheDocument();
    });
});