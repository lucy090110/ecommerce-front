import React,{useEffect} from 'react'
import { Col, Row, Typography,Form,Input,Button,Divider,Select } from "antd"
import ProductionItem from "@/src/components/app/home/components/ProductionItem"

const { Title } = Typography
const Home = (props:any) => {
    const {home,category,getProductions,getCategory}=props;
    const productionArr=[{
        sortBy:'createdAt',
        title:'最新上架'
    },{
        sortBy:'sold',
        title:'最受欢迎'
    }]
    const getProductionArr=()=>{
        return productionArr.map((production)=>{
            const {sortBy}=production
            getProductions({sortBy,order:'asc',limit:10})
        })
    }
    useEffect(()=>{
        getCategory()
        getProductionArr()
    },[])
    const getProductionList = () => {
          return productionArr.map((child,index)=>{
              return (
              <div key={index} style={{margin:'20px 0'}}>
                  <Title level={5}>{child.title}</Title>
                  <Row gutter={[16, 16]}>
                      { home[child.sortBy] && home[child.sortBy].products?.map((item:any)=> (
                          <Col key={item._id} span="6">
                              <ProductionItem product={item} />
                          </Col>
                      ))}
                  </Row>
              </div>)
          })

    }
    const onFinish=()=>{

    }
    return (
        <>
                <Form
                onFinish={onFinish}
                layout="inline"
                initialValues={{ category: "All" }}
            >
                <Input.Group compact>
                    <Form.Item name="category">
                        <Select>
                            <Select.Option value="All">所有分类</Select.Option>
                            {category?.map((item:any) => (
                                <Select.Option key={item._id} value={item._id}>
                                    {item.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item name="search">
                        <Input placeholder="请输入搜索关键字" />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">搜索</Button>
                    </Form.Item>
                </Input.Group>
            </Form>
            <Divider />
            {getProductionList()}
        </>
    );
};

export default Home;