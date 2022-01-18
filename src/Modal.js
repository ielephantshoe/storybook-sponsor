import { Box, Heading, Image, Text, MenuButton, Flex, Close } from 'theme-ui'

const OverlayModal = ({
    xEnabled,
    onClose,
    content,
    /** Content of the overlay */
    children }) => {
    return (
        <Box className={`overlayModalContainer`} sx={{ position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, transition: 'opacity 0.5s', display: 'flex', background: 'rgba(0,0,0,.83)', justifyContent: 'center' }}>
            <Box className={`modalContainer`} sx={{ minWidth: '300px', background: 'white', margin: 'auto', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {xEnabled &&
                    <Box className={`modalheader`} sx={{ display: 'flex', justifyContent: 'right' }}>
                        <Box className={`modalClose`} sx={{ width: '5%', justiftySelf: 'right', marginBlock: '1em' }} onClick={() => onClose()}><Close/></Box>
                    </Box>
                }
                <Box className={`modalContent`} sx={{ padding: '1em' }}>
                    {content || children}
                </Box>
            </Box>
        </Box>
    )
}

export default OverlayModal