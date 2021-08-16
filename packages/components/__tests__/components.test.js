import { toHaveStyle } from '@testing-library/jest-dom'
import Button from '../src/Button'
import { fireEvent, render, screen } from "@testing-library/react"
import { Box } from '@theme-ui/components';
import Form from '../src/Form';
import FormElement from '../src/FormElement';


describe("Button Tests", () => {

    it('Is Button rendering?', () => {
        render(<Button>click me</Button>)
        expect(screen.getByText(/click me/i)).toBeVisible()
    });

    it('Is a Button?', () => {
        render(<Button>Click me</Button>)
        expect(screen.getByRole('button')).toBeDefined()
    });

    it('Is Button clickable?', () => {
        const handleClick = jest.fn()
        render(<Button onClick={handleClick}> click me</Button>)
        fireEvent.click(screen.getByText(/click me/i))
        expect(handleClick).toHaveBeenCalledTimes(1)
    });

    it('Is cursor style on Button?', () => {
        render(<Button>click me</Button>)
        expect(screen.getByRole('button')).toHaveStyle({ cursor: 'pointer' })
    });
})


describe("Form Tests", () => {

    it('Is Form rendering?', () => {
        render(<Form>Test</Form>)
        expect(screen.getByRole('form')).toBeTruthy()
    });

    it('Is Form submitable?', () => {
        const handleSubmit = jest.fn()
        render(<Form onSubmit={handleSubmit}><Button>Submit</Button></Form>)
        fireEvent.click(screen.getByText(/Submit/i))
        expect(handleSubmit).toHaveBeenCalledTimes(1)
    });

    it('Is Form data acessable?', () => {

        const submitResults = jest.fn()

        render(
            <Form onSubmit={(data) => {
                const submit = JSON.parse(data)
                submitResults.mockReturnValueOnce(submit.dataTest)
            }}>
                <FormElement type="bool" name="dataTest" Label="DataTest" defaultValue={true} />
                <Button>Submit</Button>
            </Form>)

        fireEvent.click(screen.getByText(/Submit/i))
        expect(submitResults()).toBeTruthy()
    });

})
