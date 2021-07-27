import React, {useState} from "react";
import {Avatar, Card, List, Skeleton, Toggle} from "react-windy-ui";
import pic from '../../../style/imgs/pic_p2.jpg'

function SkeletonComponent({loading}) {
  return loading ?
    <Skeleton style={{width: '20rem'}}>
      <Skeleton.Item height={150}/>
      <List style={{marginTop: '1rem'}}>
        <List.Item
          compact
          type="panel"
          icon={<Skeleton.Item type="circle"/>}
          title={<Skeleton.Item width='40%' height={12}/>}
          description={<Skeleton.Item height={12}/>}
        />
      </List>
      <Skeleton.Item height={12}/>
      <Skeleton.Item height={12}/>
    </Skeleton>
    : <Card style={{width: '20rem'}}>
      <Card.CardImage autoScale>
        <Card.Image src={pic} style={{height: '150px'}}>
        </Card.Image>
      </Card.CardImage>
      <Card.Body>
        <List>
          <List.Item
            compact
            vertical={true}
            type="panel"
            icon={<Avatar hasBox={false} extraClassName="bg-color-green">B</Avatar>}
            title={<h5>Wang</h5>}
            description={<h6>The description</h6>}>
            <h6 className="text comment">A hill is a landform that extends above the surrounding terrain. It often has a
              distinct summit.
            </h6>
          </List.Item>
        </List>
      </Card.Body>

    </Card>;
}


export default function Skeleton3() {
  const [loading, setLoading] = useState(false);
  return <>
    <div className="doc doc-row">
      <Toggle active={loading} onChange={val => setLoading(val)}
              label='Loading'/>
    </div>
    <SkeletonComponent loading={loading}/>
  </>;
};