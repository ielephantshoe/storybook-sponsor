import PropTypes from "prop-types"
import { Box, Heading, Image, Text } from 'theme-ui'

export default function TileSelect({ data, ...props }) {
    return (
        <Box id='tile-container' sx={{ display: 'grid', gridTemplateColumns: ['1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)'], gridGap: ['20px', '30px', '30px'] }}>
            { data.map((item) =>
                <Box as="a"
                    href={'#'}
                    sx={{
                        display: 'block', position: 'relative', background: '#fff', boxShadow: '0 0 0 1px rgba(63,63,68,.05),0 1px 3px 0 rgba(63,63,68,.15)', borderRadius: '3px', height: '195px', transition: 'box-shadow .2s ease-in-out,transform .1s ease-in-out', textDecoration: 'none', cursor: 'pointer', color: 'black',
                        ':hover': {
                            transform: 'scale(1.01)',
                            boxShadow: '0 0 0 1px rgba(63,63,68,.05),0 3px 8px 0 rgba(63,63,68,.15)'
                        },
                    }}
                    key={item.name}>
                    <Box id='tile-header' sx={{ position: 'relative', display: 'flex', justifyContent: 'space-between', height: '60px', boxShadow: 'inset 0 -1px 0 0 #c4cdd5' }}>
                        <Box id='tile-avatar' sx={{ width: '60px', height: '60px', position: 'relative', top: '30px', left: '30px' }}>
                            <Box sx={{ backgroundColor: 'grey', height: '100%', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="50px">
                                    <path d="M50,3l12,36h38l-30,22l11,36l-31-21l-31,21l11-36l-30-22h38z" fill={`${item.levelCode}`} />
                                </svg>
                            </Box>
                        </Box>
                        <Box id='tile-headline' sx={{ textTransform: 'uppercase', position: 'absolute', bottom: '11px', right: '20px', fontSize: ['0.75em'] }}>
                            <Text>{item.sponsors} Sponsors</Text>
                        </Box>
                    </Box>
                    <Box id='tile-info' sx={{ margin: '59px 0 0 30px;' }}>
                        <Heading as='h3' sx={{ fontSize: '1rem', fontWeight: 500, margin: '0 0 4px 0' }}>{item.name}</Heading>
                        <div class="last-update">{item.lastUpdated}</div>
                    </Box>
                </Box>
            )}
        </Box>
    )
}

TileSelect.propTypes = {
    data: PropTypes.object,
}
