import Button from '../src/Button'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '../src/Form';
import FormElement from '../src/FormElement';
import SponsorTable from '../src/SponsorTable';


describe('Button Tests', () => {

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
        userEvent.click(screen.getByText(/click me/i))
        expect(handleClick).toHaveBeenCalledTimes(1)
    });

    it('Is cursor style on Button?', () => {
        render(<Button>click me</Button>)
        expect(screen.getByRole('button')).toHaveStyle({ cursor: 'pointer' })
    });

})

describe('Form Element Tests', () => {

    it('Is Form Element rendering?', () => {
        render(<FormElement type='text' name='test' label='test' />)
        expect(screen.getByLabelText('test')).toBeVisible()
        expect(screen.getByRole('textbox')).toBeVisible()
    });

    it('Is Form Element label assigned to input section?', () => {
        render(<FormElement type='text' name='test' label='test' />)
        expect(screen.getByLabelText('test')).toBeValid()
    });

})

describe('Form Tests', () => {

    it('Is Form rendering valid?', () => {
        render(<Form>Test</Form>)
        expect(screen.getByRole('form')).toBeValid()
    });

    it('Is Form submitable?', () => {
        const handleSubmit = jest.fn()
        render(<Form onSubmit={handleSubmit}><Button>Submit</Button></Form>)
        userEvent.click(screen.getByText(/Submit/i))
        expect(handleSubmit).toHaveBeenCalledTimes(1)
    });

    it('Is Form submitable with Enter?', () => {
        const handleSubmit = jest.fn()
        render(
            <Form onSubmit={handleSubmit}>
                <FormElement type='text' name='dataTest' Label='DataTest' defaultValue={'true'} />
                <Button>Submit</Button>
            </Form>
        )
        // input search and hit enter
        userEvent.type(screen.getByRole('textbox'), 'name{enter}')
        expect(handleSubmit).toHaveBeenCalledTimes(1)
    });

    it('Is Form data accessible?', () => {
        const submitResults = jest.fn()
        render(
            <Form onSubmit={(data) => {
                const submit = JSON.parse(data)
                submitResults.mockReturnValueOnce(submit.dataTest === 'true')
            }}>
                <FormElement type='text' name='dataTest' Label='DataTest' defaultValue='true' />
                <Button>Submit</Button>
            </Form>
        )
        userEvent.click(screen.getByText(/Submit/i))
        expect(submitResults()).toBe(true)
    });

})


describe('Sponsor Table Tests', () => {

    it('Is Table rendering valid?', () => {
        render(<SponsorTable />)
        expect(screen.getByRole('table')).toBeValid()
    });

    const formdata =
        [
            {
                'guid': '72e56d08-367a-42bf-a17f-33dda0490d6a',
                'isActive': true,
                'picture': 'http://placehold.it/32x32',
                'name': 'MEDIFAX',
                'invoiceStatus': 'Invoiced',
                'level': 'Silver Sponsor',
                'mainContact': 'Wagner Payne',
                'secondContact': 'Mara Giles',
                'email': 'maragiles@medifax.com',
                'street': '497 Noll Street',
                'city': 'Trexlertown',
                'state': 'Indiana',
                'zip': 5285,
                'country': 'Country',
                'registered': '2019-08-18',
                'files': [
                    {
                        'id': 0,
                        'name': 'Buzzness',
                        'href': 'http://placehold.it/250x250'
                    },
                    {
                        'id': 1,
                        'name': 'Decratex',
                        'href': 'http://placehold.it/250x250'
                    },
                    {
                        'id': 2,
                        'name': 'Geologix',
                        'href': 'http://placehold.it/250x250'
                    },
                    {
                        'id': 3,
                        'name': 'Ginkogene',
                        'href': 'http://placehold.it/250x250'
                    }
                ]
            },
            {
                'guid': '02c8df48-49f1-4829-8ecd-dd0965cab98c',
                'isActive': true,
                'picture': 'http://placehold.it/32x32',
                'name': 'PHOLIO',
                'invoiceStatus': 'New',
                'level': 'Silver Sponsor',
                'mainContact': 'Navarro Hester',
                'secondContact': 'Merritt Sykes',
                'email': 'merrittsykes@pholio.com',
                'street': '946 Raleigh Place',
                'city': 'Wattsville',
                'state': 'Nevada',
                'zip': 9344,
                'country': 'Country',
                'registered': '2019-06-28',
                'files': [
                    {
                        'id': 0,
                        'name': 'Insurety',
                        'href': 'http://placehold.it/250x250'
                    },
                    {
                        'id': 1,
                        'name': 'Geeketron',
                        'href': 'http://placehold.it/250x250'
                    },
                    {
                        'id': 2,
                        'name': 'Interodeo',
                        'href': 'http://placehold.it/250x250'
                    },
                    {
                        'id': 3,
                        'name': 'Magneato',
                        'href': 'http://placehold.it/250x250'
                    },
                    {
                        'id': 4,
                        'name': 'Zoarere',
                        'href': 'http://placehold.it/250x250'
                    }
                ]
            }
        ]

    it('Is Table data loaded?', () => {
        render(<SponsorTable data={formdata} />)
        expect(screen.getByRole('table')).toBeValid()
    });

    it('Is row expanded onclick?', () => {
        render(<SponsorTable data={formdata} />)

        // Get the rows - in this case cells are the rows
        const rows = screen.getAllByRole('cell')
        const rowNum = rows.length
        userEvent.click(rows[0])

        // Compare how many rows we have after fire event
        const newRowNum = screen.getAllByRole('cell').length
        expect(rowNum == newRowNum - 1).toBe(true)
    });

    it('Is button working to submit filter form?', () => {
        render(<SponsorTable data={formdata} />)

        // Hit the filter button
        const filterButton = screen.getByRole('button', { name: /filter/i })
        userEvent.click(filterButton)

        // // count the rows and get the search input box
        const rowNum = screen.getAllByRole('cell').length
        const search = screen.getByRole('textbox')

        // // input search and click the button
        userEvent.type(search, 'name')
        userEvent.click(screen.getByRole('button'))

        // // compare how many rows we have after fire event
        const newRowNum = screen.getAllByRole('cell').length

        // // expect the number to be 1 greater than the original
        expect(rowNum == newRowNum - 1).toBe(true)
    });

    it('Is enter to submit filter form functioning?', () => {
        render(<SponsorTable data={formdata} />)

        // Hit the filter button
        const filterButton = screen.getByRole('button', { name: /filter/i })
        userEvent.click(filterButton)

        // count the rows and get the search input box
        const rowNum = screen.getAllByRole('cell').length
        const search = screen.getByRole('textbox')

        // input search and hit enter
        userEvent.type(search, 'name{enter}')

        // compare how many rows we have after fire event
        const newRowNum = screen.getAllByRole('cell').length

        // expect the number to be 1 greater than the original
        expect(rowNum == newRowNum - 1).toBe(true)
    });

    it('Is closing input field for search / filter possible?', () => {
        render(<SponsorTable data={formdata} />)

        // Cant action without selecting filter or search
        expect(screen.queryByText('Enter')).toBeNull()

        // Hit the filter button
        userEvent.click(screen.getByRole('button', { name: /filter/i }))

        // We can see Enter button now
        expect(screen.getByRole('button', { name: /enter/i })).toBeValid()
        
        // Can we close action menu / inputting search?
        userEvent.click(screen.getByRole('form').querySelector('svg'))

        // Cant action without selecting filter or search
        expect(screen.queryByText('Enter')).toBeNull()
    });

    it('Is removing a filter possible?', () => {
        render(<SponsorTable data={formdata} />)
        // Hit the filter button
        const filterButton = screen.getByRole('button', { name: /filter/i })
        userEvent.click(filterButton)

        // count the rows and get the search input box
        const rowNum = screen.getAllByRole('cell').length
        const search = screen.getByRole('textbox')

        // input search and hit enter
        userEvent.type(search, 'testFilter{enter}')

        // compare how many rows we have after fire event
        const newRowNum = screen.getAllByRole('cell').length

        // expect the number to be 1 greater than the original
        expect(rowNum == newRowNum - 1).toBe(true)

        // Remove the filter
        userEvent.click(screen.getByRole('cell', { name: /testFilter/i }))

        // Count the rows after removing filter
        const removedFilterRowNum = screen.getAllByRole('cell').length

        expect(rowNum == removedFilterRowNum).toBe(true)
    });

    it('Is opening an asset possible?', () => {
        render(<SponsorTable data={formdata} />)
        window.open = jest.fn()
        // Get the rows - in this case cells are the rows
        const rows = screen.getAllByRole('cell')
        // expand the first row
        userEvent.click(rows[0])
        // click first asset button
        userEvent.click(screen.getAllByText(/view/i)[0])
        // expect the open function to have been called
        expect(window.open).toHaveBeenCalled()
    });
})
