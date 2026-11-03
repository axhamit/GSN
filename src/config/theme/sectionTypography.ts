import { SxProps, Theme } from '@mui/material/styles'

export const sectionBadgeSx: SxProps<Theme> = {
  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
  fontWeight: 700,
  letterSpacing: 0.5,
}

export const sectionHeadlineSx: SxProps<Theme> = {
  fontSize: { xs: '1.6rem', sm: '1.9rem', md: '2.35rem', lg: '2.6rem' },
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: '-0.02em',
  textAlign: 'center',
}

export const sectionSubtitleSx: SxProps<Theme> = {
  fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
  fontWeight: 700,
}

export const sectionDescriptionSx: SxProps<Theme> = {
  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem' },
  lineHeight: 1.7,
}

export const sectionCardTitleSx: SxProps<Theme> = {
  fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
  fontWeight: 700,
}

export const sectionStatSx: SxProps<Theme> = {
  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
  fontWeight: 900,
  lineHeight: 1,
}

export const sectionEyebrowSx: SxProps<Theme> = {
  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1.125rem' },
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
}

export const sectionCtaTitleSx: SxProps<Theme> = {
  fontSize: { xs: '1.25rem', sm: '1.375rem', md: '1.625rem' },
  fontWeight: 700,
}

export const homepageSectionEyebrowSx: SxProps<Theme> = {
  mb: 1,
  color: 'primary.main',
  fontSize: '0.78rem',
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  textAlign: 'center',
}

export const homepageSectionTitleSx: SxProps<Theme> = {
  mb: 1.25,
  color: '#172b3c',
  fontSize: { xs: '2rem', md: '2.5rem' },
  fontWeight: 650,
  letterSpacing: '-0.035em',
  lineHeight: 1.2,
  textAlign: 'center',
}

export const homepageSectionDescriptionSx: SxProps<Theme> = {
  color: 'text.secondary',
  fontSize: '1rem',
  lineHeight: 1.7,
  textAlign: 'center',
}
