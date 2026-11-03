import React, { FC } from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import { data } from './testimonial.data'
import {
  homepageSectionDescriptionSx,
  homepageSectionEyebrowSx,
  homepageSectionTitleSx,
} from '@/config/theme/sectionTypography'

const StudentStories: FC = () => (
  <Box
    component="section"
    id="student-stories"
    sx={{ py: { xs: 7, md: 9 }, backgroundColor: '#f6f8fa' }}
  >
    <Container maxWidth="lg">
      <Box sx={{ mb: { xs: 3, md: 4 }, maxWidth: 680, mx: 'auto', textAlign: 'center' }}>
        <Typography
          component="p"
          sx={homepageSectionEyebrowSx}
        >
          Student perspectives
        </Typography>
        <Typography
          component="h2"
          sx={homepageSectionTitleSx}
        >
          Support that makes a difference
        </Typography>
        <Typography sx={homepageSectionDescriptionSx}>
          Hear how learners describe their experience with GSN.
        </Typography>
      </Box>

      <Grid container spacing={2.5}>
        {data.slice(0, 3).map((story) => (
          <Grid item xs={12} md={4} key={story.id}>
            <Box
              component="article"
              sx={{
                display: 'flex',
                height: '100%',
                flexDirection: 'column',
                p: { xs: 2.5, md: 3 },
                border: '1px solid #e3e9ee',
                borderRadius: 3,
                backgroundColor: '#fff',
              }}
            >
              <FormatQuoteIcon aria-hidden="true" sx={{ mb: 1.5, color: '#1264a3', fontSize: 30 }} />
              <Typography component="h3" sx={{ mb: 1, color: '#172b3c', fontSize: '1rem', fontWeight: 700 }}>
                {story.title}
              </Typography>
              <Typography sx={{ flex: 1, mb: 3, color: 'text.secondary', fontSize: '0.92rem', lineHeight: 1.75 }}>
                {story.content}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, pt: 2, borderTop: '1px solid #edf0f2' }}>
                <Avatar
                  src={`/images/avatars/${story.user.photo}`}
                  alt={story.user.name}
                  sx={{ width: 42, height: 42 }}
                />
                <Box>
                  <Typography sx={{ color: '#172b3c', fontSize: '0.88rem', fontWeight: 700 }}>
                    {story.user.name}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.78rem' }}>
                    {story.user.professional}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
)

export default StudentStories
