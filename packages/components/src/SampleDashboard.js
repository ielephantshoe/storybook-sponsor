import Tile from './Tile';
import Appbar from './Appbar';
import Button from './Button';
import { Box, Heading, Input } from 'theme-ui';
import { useState } from 'react';


//------------------------------------------------------------------------------
import GCImage from './stories/assets/Globacore-logo.png'
//------------------------------------------------------------------------------


export default function SampleDashboard({ data }) {

    const [isFiltering, toggleFiltering] = useState(false)
    const [filters, setFilters] = useState([])



    const SimpleWeightFilter = (data, cols) => {
        if (filters.length > 0) {
            const sortedList = data
                .map(r => {
                    let score = 0
                    cols.forEach(col => {
                        filters.map(fil => r[`${col.key}`].match(new RegExp(fil, 'i')) ? score = score + col.weight : score += 0)
                    })
                    return { src: r, weight: score }
                })
                .sort((a, b) => {
                    return a.weight < b.weight
                }).map((r) => {
                    return r.src
                })
            return sortedList
        }
        return data
    }

    return (
        <Box>
            <Appbar logo={GCImage}>
                <Heading as='h2' sx={{ justifySelf: 'center' }}>Admin: Events</Heading>
                <Box sx={{ display: 'flex' }}>
                    <Button> Logout</Button>
                </Box>
            </Appbar>
            <Box sx={{ maxWidth: '1200px', margin: 'auto' }}>
                <Box sx={{ display: 'grid', paddingBlock: '2em', gridAutoFlow: ['row', 'column', 'column'], gap: '0.5em' }}>

                    {filters.length > 0 &&
                        <Box id='filter-row' sx={{ display: 'flex', gap: ['0.5em', '1em', '1em'] }}>
                            {filters.map(filter => <Button onClick={() => { setFilters(filters.filter(f => f !== filter)) }}>{filter} x</Button>)}
                        </Box>
                    }
                    <Box as='form' sx={{ display: 'flex', justifyContent: ['center', 'end', 'end'], gap: ['0.5em', '0.5em', '1em'] }}
                        onSubmit={(e) => {
                            const formData = new FormData(e.currentTarget);
                            e.preventDefault();
                            e.currentTarget.reset()
                            setFilters(item => [...item, formData.get('filter')])
                        }}>
                        {isFiltering ?
                            <>
                                <Box onClick={() => { toggleFiltering(false), toggleSearching(false) }} sx={{ height: '16px', width: '16px', display: 'flex', alignSelf: 'center', cursor: 'pointer' }}>
                                    <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='times' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 352 512'><path fill='currentColor' d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'></path></svg>
                                </Box>
                                <Input name='filter' type='text' sx={{ width: 'auto', padding: 'unset' }} />
                                <Button type='submit'>Enter</Button>
                            </>
                            :
                            <>
                                <Button type='button' onClick={() => { toggleFiltering(!isFiltering) }}>Filter</Button>
                                <Button>Create</Button>
                            </>
                        }
                    </Box>
                </Box>
                <Box id='tile-container' sx={{ display: 'grid', gridTemplateColumns: ['1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)'], gridGap: ['20px', '30px', '30px'] }}>
                    {SimpleWeightFilter(data, [{ key: 'name', weight: 5 }, { key: 'level', weight: 3 }, { key: 'mainContact', weight: 3 }]).map((item, index) =>
                        <Tile key={index} {...item} />
                    )}
                </Box>

            </Box>
        </Box>
    )
}
