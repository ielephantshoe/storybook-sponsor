import Button from './Button'
import { useState } from 'react'
import { keyframes } from '@emotion/react'
import { Box, Heading, Text, Input } from 'theme-ui'

const formInOut = keyframes`
  from {
      opacity: 1;
      top: -20vh
  }
  to {
    top:0;
  }
`

export default function SponsorTable({ data, ...props }) {
    const [isSearching, toggleSearching] = useState(false)
    const [isFiltering, toggleFiltering] = useState(false)
    const [isOpen, openitem] = useState([])
    const [filters, setFilters] = useState([])

    const HandleFormClick = (i) => {
        isOpen.includes(i) ? openitem(isOpen.filter(item => item != i)) : openitem(item => [...item, i])
    }

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
        <Box id='sponsor-table' sx={{ width: '100%', fontSize: ['0.75em', '1em', '1em'] }}>

            {/* Head bar thats 25% / 75% of the screen. Left: Title, Right: Search, Filter Button and  input */}

            <Box id='sponsorT-header' sx={{ display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: ['25% 75%', '36% 64%'], textAlign: 'center', alignItems: 'center' }}>
                <Heading as='h3'>Sponsor List</Heading>
                <Box as='form' aria-label='form' onSubmit={(e) => {
                    const formData = new FormData(e.currentTarget);
                    e.preventDefault();
                    e.currentTarget.reset()
                    setFilters(item => [...item, formData.get('filter')])
                }}
                    id={'sponsorT-toolbar'} sx={{ display: 'flex', justifyContent: 'end', gap: ['0.5em', '1em', '1em'] }}>

                    {/* if we're searching or filtering, show the input field and button , otherwise show the two buttons filter or search*/}

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
                        </>
                    }

                </Box>
            </Box>
            <Box id={'sponsorT-Table'} as='table' sx={{ width: '100%' }}>
                <Box id={'sponsorT-table-heading'} as='thead'>
                    <Box as='tr' sx={{ display: 'grid', gridTemplateColumns: ['24% 18% 25% 23%', '24% 13% 21% 19% 17%', '24% 13% 21% 19% 17%'], gridAutoFlow: 'column', background: '#C4C4C4', padding: '0.5em', gap: 'min(0.5em,2vw)', marginTop: 'min(2vh,1em)', border: 'grey', borderStyle: 'solid', borderWidth: '1px 1px 0 1px', textAlign: 'left' }}>
                        <Text as='th' sx={{ display: 'grid', alignItems: 'center' }}>Sponsor Name</Text>

                        <Text as='th' sx={{ display: 'grid', alignItems: 'center' }}>Sponsor Level</Text>

                        <Text as='th' sx={{ display: 'grid', alignItems: 'center' }}>Main Contact</Text>

                        <Text as='th' sx={{ display: 'grid', alignItems: 'center' }}>Secondary Contact</Text>

                        <Box as='th'></Box>
                    </Box>
                </Box>

                {/* Box Section that displays filters used on the table*/}
                <Box as='tbody'>
                    {filters.length > 0 &&
                        <Box id={'sponsorT-table-filter-row'} as='tr' sx={{ display: 'flex', flexWrap: 'wrap', padding: '0.5em', border: '1px grey solid', gap: '1em' }}>
                            {filters.map((item, i) =>
                                <Box id={'table-filter'} key={i} as='td' sx={{ background: '#C4C4C4', padding: '0.5em', fontSize: ['0.75em'], gap: '1em', display: 'flex', alignItems: 'center', borderRadius: '100px', textTransform: 'uppercase', cursor: 'pointer', '&:hover': { boxShadow: '0px 0px 1px 1px' } }}
                                    onClick={() => { setFilters(filters.filter(x => x != item)) }}>
                                    <Text>{item}</Text>
                                    <svg width='12' height='12' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <circle cx='12' cy='12' r='11' fill='#C4C4C4' stroke='#606060' strokeWidth='2' />
                                        <line x1='4.45711' y1='4.29289' x2='19.3063' y2='19.1421' stroke='#606060' strokeWidth='2' />
                                        <line x1='4.54289' y1='19.1425' x2='19.3921' y2='4.29326' stroke='#606060' strokeWidth='2' />
                                    </svg>
                                </Box>
                            )}
                        </Box>
                    }

                    {/* Mapping the Data onto the table*/}

                    { data &&
                        SimpleWeightFilter(data, [{ key: 'name', weight: 5 }, { key: 'level', weight: 3 }, { key: 'mainContact', weight: 3}]).map((item, index) =>
                            <Box id={'sponsorT-table-row-entry'} key={index} as='tr' sx={{ overflow: 'hidden', display: 'grid' }}>

                                {/* Row Entry - Small (Just Row) */}
                                <Box as='td' id={'sponsorT-entry-small'} sx={{
                                    display: 'grid', gridTemplateColumns: ['24% 18% 25% 23%', '24% 13% 21% 19% 17%', '24% 13% 21% 19% 17%'], gridAutoFlow: 'column', padding: '0.5em', gap: 'min(0.5em,1vw)', border: '1px grey solid', alignItems: 'center', background: 'white', position: 'relative', zIndex: '1', cursor: 'pointer',
                                    borderBottom: `${isOpen.includes(item.guid) ? 0 : ''}`,
                                    '&:hover  #controls': {
                                        visibility: 'visible'
                                    },
                                }} onClick={() => { HandleFormClick(item.guid) }}>
                                    <Text>{item.name}</Text>

                                    <Text>{item.level}</Text>

                                    <Text>{item.mainContact}</Text>

                                    <Text>{item.secondContact}</Text>

                                    <Box id={'controls'} sx={{ gridAutoFlow: 'column', gap: '0.5em', fontSize: ['0.75em', '0.75em', '1em'], visibility: 'hidden', display: ['none', 'grid', 'grid'] }}>
                                        <Button>Edit</Button>
                                        <Button>Delete</Button>
                                    </Box>
                                </Box>

                                {/* Opened Tabbed / Enlarged Sponsor Section*/}

                                {isOpen.includes(item.guid) &&
                                    <Box as='td' id={'sponsorT-entry-enlgared'} sx={{ display: 'grid', padding: '0.5em', border: '1px grey solid', position: 'relative', animation: `${formInOut} 0.2s ease-in-out`, borderTop: `${isOpen.includes(item.guid) ? 0 : ''}` }}>
                                        <Box id={'row-enlarged-header'} sx={{ display: 'grid', gridAutoFlow: 'column', gridAutoColumns: '1fr', padding: '0.5em', border: '1px gray solid', background: 'white' }}>
                                            <Box id={'enlarged-addy'} sx={{ display: 'grid', alignItems: 'center' }}>
                                                <Text>{item.street}</Text>
                                                <Text>{item.city} {item.state}</Text>
                                                <Text>{item.zip} Country</Text>
                                            </Box>
                                            <Box id={'contract-date'} sx={{ display: 'grid', alignItems: 'center' }}>
                                                <Text>Contract Date: {item.registered}</Text>
                                            </Box>
                                            <Box id={'invoice-status'} sx={{ display: 'grid', alignItems: 'center' }}>
                                                <Text>Invoice Status: /* STATUS */</Text>
                                            </Box>
                                        </Box>

                                        <Box id={'row-assets-upload'} sx={{
                                            display: 'flex', flexWrap: 'wrap'
                                        }}>
                                            {/* Flex Wrap section file upload status */}
                                            {item.files.map((file, i) =>
                                                <Box id={'available-assets'} key={i} sx={{ display: 'flex', flex: ['1 1 50%', '1 1 25%', '1 1 25%'], maxWidth: ['50%', '25%', '25%'], padding: 'min(1vh, 0.5em)', justifyContent: 'space-between', alignItems: 'center', border: '1px grey solid' }}>
                                                    <Text>{file.name}</Text>
                                                    <Button onClick={() => { window.open(file.href) }}>VIEW</Button>
                                                </Box>
                                            )}
                                        </Box>
                                    </Box>
                                }
                            </Box>
                        )
                    }
                </Box>
            </Box>
        </Box>
    )
}
