import React, { FC, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { motion } from 'framer-motion'
import type { Course } from '@/interfaces/course'
import EnrollmentForm from '@/components/form/EnrollmentForm'
import { SHOW_FEES } from '@/utils/config'

interface CourseCardItemProps {
  item: Course
  index?: number
}

const CourseCardItem: FC<CourseCardItemProps> = ({ item, index = 0 }) => {
  const router = useRouter()
  const [enrollOpen, setEnrollOpen] = useState(false)
  const title = item.title.replace(/^🚀\s*/, '').replace(/^Career Launch Academy - /, '')

  const handleViewDetails = (): void => {
    void router.push(`/courses/${item.slug || item.id}`)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.2) }}
        style={{ height: '100%' }}
      >
        <Box
          component="article"
          sx={{
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid #e3e9ee',
            borderRadius: 3,
            backgroundColor: '#fff',
            transition: 'border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease',
            '&:hover': {
              transform: 'translateY(-3px)',
              borderColor: '#c4d2dd',
              boxShadow: '0 12px 30px rgb(23 43 60 / 9%)',
            },
            '&:hover .course-card-image': { transform: 'scale(1.035)' },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              aspectRatio: '16 / 10',
              overflow: 'hidden',
              backgroundColor: '#edf2f5',
            }}
          >
            <Image
              src={item.cover}
              alt={item.title}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="course-card-image"
              style={{ objectFit: 'cover', transition: 'transform 300ms ease' }}
            />
            <Box
              sx={{
                position: 'absolute',
                right: 12,
                bottom: 12,
                left: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 1,
              }}
            >
              <Chip
                label={item.category}
                size="small"
                sx={{
                  maxWidth: '80%',
                  color: '#17324d',
                  backgroundColor: 'rgba(255,255,255,0.94)',
                  fontWeight: 650,
                  '& .MuiChip-label': { overflow: 'hidden', textOverflow: 'ellipsis' },
                }}
              />
              {item.badge && (
                <Typography
                  component="span"
                  sx={{
                    flexShrink: 0,
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    color: '#fff',
                    backgroundColor: '#17324d',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                  }}
                >
                  {item.badge}
                </Typography>
              )}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', p: { xs: 2.25, md: 2.5 } }}>
            <Typography
              component="h3"
              sx={{
                minHeight: '3.2em',
                mb: 1.25,
                color: '#172b3c',
                fontSize: '1.08rem',
                fontWeight: 700,
                lineHeight: 1.5,
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                overflow: 'hidden',
              }}
            >
              {title}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1.75 }}>
              <StarRoundedIcon sx={{ color: '#b77932', fontSize: 18 }} />
              <Typography variant="body2" sx={{ color: '#33485a', fontWeight: 650 }}>
                {item.rating.toFixed(1)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ({item.ratingCount.toLocaleString()} ratings)
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 1.75,
                mb: 2,
                color: 'text.secondary',
              }}
            >
              {item.duration && (
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.6 }}>
                  <AccessTimeIcon sx={{ fontSize: 17 }} />
                  <Typography variant="body2">{item.duration}</Typography>
                </Box>
              )}
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.6 }}>
                <PeopleOutlineIcon sx={{ fontSize: 18 }} />
                <Typography variant="body2">{(item.students || item.ratingCount).toLocaleString()} learners</Typography>
              </Box>
            </Box>

            {item.tags && item.tags.length > 0 && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2.5 }}>
                {item.tags.slice(0, 2).map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    variant="outlined"
                    sx={{
                      height: 25,
                      borderColor: '#dce4ea',
                      color: '#526579',
                      fontSize: '0.72rem',
                    }}
                  />
                ))}
              </Box>
            )}

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 1,
                mt: 'auto',
                pt: 2,
                borderTop: '1px solid #edf0f2',
              }}
            >
              {SHOW_FEES ? (
                <Typography sx={{ color: '#172b3c', fontSize: '1.1rem', fontWeight: 750 }}>
                  ₹{item.price.toLocaleString('en-IN')}
                </Typography>
              ) : (
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Course details
                </Typography>
              )}
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  variant="outlined"
                  onClick={handleViewDetails}
                  sx={{ minWidth: 0, px: 1.5 }}
                >
                  Details
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setEnrollOpen(true)}
                  sx={{ minWidth: 0, px: 1.5 }}
                >
                  Enquire
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>

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
