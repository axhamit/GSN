import React, { FC, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme, alpha } from '@mui/material/styles'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'
import PeopleIcon from '@mui/icons-material/People'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import VisibilityIcon from '@mui/icons-material/Visibility'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import StarIcon from '@mui/icons-material/Star'
import { motion } from 'framer-motion'
import { Course } from '@/interfaces/course'
import EnrollmentForm from '@/components/form/EnrollmentForm'
import { SHOW_FEES } from '@/utils/config'

interface CourseCardItemProps {
  item: Course
  index?: number
}

const CourseCardItem: FC<CourseCardItemProps> = ({ item, index = 0 }) => {
  const theme = useTheme()
  const router = useRouter()
  const [enrollOpen, setEnrollOpen] = useState(false)
  const isCareerLaunch = item.category === 'Career Launch Academy'

  // Generate dynamic tags
  const getTags = (course: Course): string[] => {
    if (course.tags && course.tags.length > 0) {
      return course.tags.slice(0, 2)
    }
    const tags: string[] = []
    if (course.category?.includes('11th') || course.category?.includes('12th')) {
      tags.push('Board Prep')
    }
    if (course.category?.includes('Entrance') || course.category?.includes('Medical') || course.category?.includes('Engineering')) {
      tags.push('Competitive')
    }
    if (course.price && course.price > 20000) {
      tags.push('Premium')
    }
    if (course.rating && course.rating >= 4.5) {
      tags.push('Top Rated')
    }
    if (tags.length === 0) {
      tags.push('Popular')
    }
    return tags.slice(0, 2)
  }

  const courseTags = getTags(item)

  const handleEnrollClick = () => {
    setEnrollOpen(true)
  }

  const handleViewDetails = () => {
    const slug = item.slug || item.id
    router.push(`/courses/${slug}`)
  }

  // Green color for Career Launch tag
  const greenColor = '#2e7d32'
  const greenLight = '#4caf50'

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.06 }}
        whileHover={{ y: -6 }}
        style={{ height: '100%' }}
      >
        <Box
          sx={{
            height: '100%',
            borderRadius: 4,
            overflow: 'hidden',
            position: 'relative',
            background: theme.palette.background.paper,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.06)}`,
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            display: 'flex',
            flexDirection: 'column',
            '&:hover': {
              boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.12)}`,
              borderColor: alpha(theme.palette.primary.main, 0.15),
              '& .card-image': {
                transform: 'scale(1.05)',
              },
              '& .view-details-btn': {
                backgroundColor: 'primary.main',
                color: 'white',
                borderColor: 'primary.main',
              },
              '& .enroll-btn': {
                transform: 'scale(1.02)',
              },
            },
          }}
        >
          {/* Green Tag for Career Launch Academy */}
          {isCareerLaunch && (
            <Box
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                zIndex: 10,
                background: `linear-gradient(135deg, ${greenColor}, ${greenLight})`,
                borderRadius: 50,
                px: 2,
                py: 0.75,
                display: 'flex',
                alignItems: 'center',
                gap: 0.75,
                boxShadow: `0 8px 25px ${alpha(greenColor, 0.4)}`,
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.05)' },
                  '100%': { transform: 'scale(1)' },
                },
              }}
            >
              <StarIcon sx={{ color: 'white', fontSize: 14 }} />
              <Typography variant="caption" sx={{ color: 'white', fontWeight: 700, fontSize: '0.7rem' }}>
                {item.badge || 'Most Popular'}
              </Typography>
            </Box>
          )}

          {/* Rocket Icon for Career Launch */}
          {isCareerLaunch && (
            <Box
              sx={{
                position: 'absolute',
                top: 16,
                left: 16,
                zIndex: 10,
                background: `linear-gradient(135deg, ${alpha(greenColor, 0.12)}, ${alpha(greenLight, 0.05)})`,
                borderRadius: 2,
                p: 1,
                border: `1px solid ${alpha(greenColor, 0.15)}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <RocketLaunchIcon sx={{ color: greenColor, fontSize: 20 }} />
            </Box>
          )}

          {/* Image Section */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: 180,
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <Image
              src={item.cover}
              alt={item.title}
              fill
              className="card-image"
              style={{
                objectFit: 'cover',
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />

            {/* Gradient Overlay */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(180deg, transparent 50%, ${alpha(theme.palette.background.paper, 0.9)})`,
                zIndex: 1,
              }}
            />

            {/* Category Badge */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 12,
                left: 12,
                zIndex: 2,
                background: isCareerLaunch
                  ? `linear-gradient(135deg, ${greenColor}, ${greenLight})`
                  : `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.92)}, ${alpha(theme.palette.primary.dark, 0.92)})`,
                borderRadius: 50,
                px: 1.5,
                py: 0.5,
                backdropFilter: 'blur(8px)',
                border: `1px solid ${alpha(theme.palette.common.white, 0.15)}`,
                boxShadow: `0 4px 15px ${alpha(isCareerLaunch ? greenColor : theme.palette.primary.main, 0.25)}`,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.6rem',
                  letterSpacing: 0.5,
                  textTransform: 'uppercase',
                }}
              >
                {isCareerLaunch ? '⭐ Career Launch' : (item.category || 'Popular')}
              </Typography>
            </Box>

            {/* Rating Badge */}
            <Box
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                background: `linear-gradient(135deg, ${alpha(theme.palette.warning.main, 0.92)}, ${alpha(theme.palette.warning.dark, 0.92)})`,
                borderRadius: 50,
                px: 1.5,
                py: 0.5,
                backdropFilter: 'blur(8px)',
                border: `1px solid ${alpha(theme.palette.common.white, 0.15)}`,
                boxShadow: `0 4px 15px ${alpha(theme.palette.warning.main, 0.25)}`,
              }}
            >
              <Typography
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.7rem',
                }}
              >
                ⭐ {item.rating}
              </Typography>
              <Typography
                sx={{
                  color: alpha(theme.palette.common.white, 0.8),
                  fontWeight: 500,
                  fontSize: '0.6rem',
                }}
              >
                ({item.ratingCount})
              </Typography>
            </Box>

            {/* Price Badge (hidden when SHOW_FEES is false) */}
            {SHOW_FEES && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 12,
                  right: 12,
                  zIndex: 2,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.success.main, 0.92)}, ${alpha(theme.palette.success.dark, 0.92)})`,
                  borderRadius: 2,
                  px: 1.5,
                  py: 0.5,
                  backdropFilter: 'blur(8px)',
                  border: `1px solid ${alpha(theme.palette.common.white, 0.15)}`,
                  boxShadow: `0 4px 15px ${alpha(theme.palette.success.main, 0.25)}`,
                }}
              >
                <Typography
                  sx={{
                    color: 'white',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    letterSpacing: 0.3,
                  }}
                >
                  ₹{item.price.toLocaleString()}
                </Typography>
              </Box>
            )}
          </Box>

          {/* Content Section */}
          <Box
            sx={{
              p: 2.5,
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            {/* Title with Career Launch Highlight */}
            <Typography
              sx={{
                fontSize: '1rem',
                fontWeight: 700,
                lineHeight: 1.3,
                color: 'text.primary',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                minHeight: 42,
                mb: 0.5,
              }}
            >
              {isCareerLaunch ? (
                <>
                  <Box component="span" sx={{ color: greenColor }}>🚀 Career Launch Academy</Box>
                  <Box component="span" sx={{ color: 'text.secondary', fontSize: '0.85rem', display: 'block' }}>
                    {item.title.replace('🚀 Career Launch Academy - ', '')}
                  </Box>
                </>
              ) : (
                item.title
              )}
            </Typography>

            {/* Rating Row */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
              <Rating
                value={item.rating}
                max={5}
                sx={{
                  color: '#ffce31',
                  mr: 1,
                  '& .MuiRating-icon': {
                    fontSize: '0.9rem',
                  },
                }}
                readOnly
              />
              <Typography
                variant="caption"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 500,
                }}
              >
                ({item.ratingCount})
              </Typography>
            </Box>

            {/* Stats Row */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                mb: 1,
                pb: 1,
                borderBottom: `1px solid ${alpha(theme.palette.divider, 0.4)}`,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <PeopleIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.7rem' }}>
                  {item.students || item.ratingCount || 0}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <AccessTimeIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.7rem' }}>
                  {item.duration || '6 Mo'}
                </Typography>
              </Box>
            </Box>

            {/* Tags - Show green chip for Career Launch */}
            {courseTags.length > 0 && (
              <Stack
                direction="row"
                spacing={0.5}
                sx={{
                  mb: 1.5,
                  flexWrap: 'wrap',
                  gap: 0.5,
                }}
              >
                {courseTags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      background: isCareerLaunch
                        ? `linear-gradient(135deg, ${alpha(greenColor, 0.12)}, ${alpha(greenLight, 0.06)})`
                        : `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)}, ${alpha(theme.palette.primary.light, 0.04)})`,
                      border: `1px solid ${alpha(isCareerLaunch ? greenColor : theme.palette.primary.main, 0.1)}`,
                      color: isCareerLaunch ? greenColor : 'primary.main',
                      fontWeight: 600,
                      fontSize: '0.6rem',
                      height: 22,
                      '& .MuiChip-label': {
                        px: 1,
                      },
                    }}
                  />
                ))}
              </Stack>
            )}

            {/* Two Action Buttons */}
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                mt: 'auto',
              }}
            >
              {/* View Details Button */}
              <Button
                className="view-details-btn"
                variant="outlined"
                startIcon={<VisibilityIcon sx={{ fontSize: 16 }} />}
                onClick={handleViewDetails}
                fullWidth
                sx={{
                  borderColor: alpha(theme.palette.primary.main, 0.3),
                  color: 'primary.main',
                  borderRadius: 2,
                  py: 1,
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    borderColor: 'primary.main',
                    boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.2)}`,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Details
              </Button>

              {/* Enroll Now Button - Green for Career Launch */}
              <Button
                className="enroll-btn"
                variant="contained"
                onClick={handleEnrollClick}
                fullWidth
                sx={{
                  background: isCareerLaunch
                    ? `linear-gradient(135deg, ${greenColor}, ${greenLight})`
                    : `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  borderRadius: 2,
                  py: 1,
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  boxShadow: `0 4px 15px ${alpha(isCareerLaunch ? greenColor : theme.palette.primary.main, 0.2)}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 25px ${alpha(isCareerLaunch ? greenColor : theme.palette.primary.main, 0.3)}`,
                  },
                }}
              >
                Enroll Now
              </Button>
            </Box>
          </Box>
        </Box>
      </motion.div>

      {/* Enrollment Form Dialog */}
      <EnrollmentForm
        open={enrollOpen}
        onClose={() => setEnrollOpen(false)}
        courseName={item.title}
        coursePrice={item.price}
      />
    </>
  )
}

export default CourseCardItem