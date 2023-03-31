import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

function SkeletonCard() {
  return (
    <Card width='300px'>
      <Skeleton height="200px"/>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default SkeletonCard