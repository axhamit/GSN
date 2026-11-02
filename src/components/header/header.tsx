import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Logo } from '@/components/logo'
import { Navigation } from '@/components/navigation'
import { useTheme } from '@mui/material/styles'
import { Menu, Close } from '@mui/icons-material'

const Header: FC = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false)
  const theme = useTheme()
  const { breakpoints } = theme
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  return (
    <Box sx={{ backgroundColor: 'background.paper', position: 'sticky', top: 0, zIndex: 1200, borderBottom: '1px solid var(--color-border)', boxShadow: '0 2px 12px rgb(23 43 60 / 4%)' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 0.75, md: 1.25 }, px: { xs: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1.5 }}>
          <Logo />

          <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none' } }}>
            <IconButton
              aria-label={visibleMenu ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={visibleMenu}
              onClick={() => setVisibleMenu(!visibleMenu)}
              sx={{ p: 1 }}
            >
              {visibleMenu ? <Close /> : <Menu />}
            </IconButton>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexGrow: 1,
              gap: { md: 1.5, lg: 2 },
            }}
          >
            <Navigation />
          </Box>

          {matchMobileView && (
            <Box
              sx={{
                display: visibleMenu ? 'flex' : 'none',
                flexDirection: 'column',
                position: 'fixed',
                inset: 0,
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                py: 2.5,
                px: 2,
                backgroundColor: 'background.paper',
                zIndex: 'appBar',
                overflowY: 'auto',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                boxShadow: `0 12px 40px ${theme.palette.grey[900]}`,
              }}
            >
              <IconButton
                aria-label="Close navigation menu"
                sx={{
                  position: 'fixed',
                  top: 12,
                  right: 12,
                  zIndex: 2,
                }}
                onClick={() => setVisibleMenu(false)}
              >
                <Close />
              </IconButton>

              <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1.5, mt: 6 }}>
                <Navigation onNavigate={() => setVisibleMenu(false)} />
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default Header