import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

function SkeletonCard() {
  return (
    <Card>
      <Skeleton height="200px"/>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default SkeletonCard