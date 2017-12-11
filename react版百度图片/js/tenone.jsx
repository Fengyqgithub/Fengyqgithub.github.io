//搜索条组件 
var Search = React.createClass({
  render: function(){
    return <p>
      <input type="text" id={this.props.txt}/>
      <input type="button" value="搜索" id={this.props.btn} />   
    </p>;
  }
});

//瀑布流组件
var Pubuliu = React.createClass({
  render: function(){
    var data = this.props.data || [];
    return <ul>
    {
      data.map(function(v){
        return <li><img src={v.thumbURL} /></li>;
      })
    }
    </ul>;
  }
});

//整体框架组件
var Box = React.createClass({
  getInitialState(){
    return {
      txt: 'txt',
      btn: 'btn',
      key: '',
      elData: [0,0,0,0], //表示四个ul的高度
      data: [[],[],[],[]]
    };
  },
  getMinUl(){
    var min = Number.MAX_VALUE, index = -1;
    for(var i=0; i<this.state.elData.length; i++){
      if( min >= this.state.elData[i] ){
        min = this.state.elData[i];
        index = i;
      }
    }
    return index;
  },
  opts: {
    start: 0,
    page: 1,
    count: 30,
    loading: false
  },
  getData(){
    var _this = this;

    if( _this.opts.loading )return;
    _this.opts.loading = true;

    _this.opts.page ++;

    $.getJSON('php/get.php?callback=?',{
      word: this.state.key,
      start: this.opts.count * this.opts.page,
      count: this.opts.count
    },function(data){

      var aUl = $("#box ul"), n = 0;

      // console.log( data );
      var imgArr = data.data; //获取到所有图片数据
      imgArr.pop(); //去掉最后一个空数据

      imgArr.map(function(v,i){
        var oImg = $('<img src="'+v.thumbURL+'">');

        oImg.load(function(){

          var index = _this.getMinUl();
          var oUl = aUl.eq(index);
          var data = _this.state.data;
          var elData = _this.state.elData;

          index = index == -1 ? 0 : index;

          // 将图片数据对象存入高度最小的ul中
          data[index].push(v);

          // 更新state中的图片数据
          _this.setState({data: data});

          elData[index] = oUl.outerHeight();
          // 更新ul的高度数据
          _this.setState({elData: elData});

          n++;

          if( n == imgArr.length ){
            _this.opts.loading = false;
          }

        });

      });

    });

  },
  componentDidMount(){
    var btn = $("#" + this.state.btn), 
        txt = $("#" + this.state.txt),
        _this = this;

    btn.click(function(){

      var val = txt.val();

      // console.log( val );
      if( !val )return; //处理空值的情况

      // 设置搜索关键字
      _this.setState({key: val});

      // 请求数据
      _this.getData();

      // 滚动页面时加载更多图片
      $(document).scroll(function(){

        var index = _this.getMinUl(), 
            oUl = $('#box ul').eq(index),
            H = $(document).scrollTop() + $(window).innerHeight(), 
            h = oUl.outerHeight() + oUl.offset().top;

        if( h < H ){
          _this.getData();
        }

      });      

    });

  },
  render: function(){
    return <div>
      <Search txt={this.state.txt} btn={this.state.btn}/>
      <Pubuliu data={this.state.data[0]}/>
      <Pubuliu data={this.state.data[1]}/>
      <Pubuliu data={this.state.data[2]}/>
      <Pubuliu data={this.state.data[3]}/>
    </div>;
  }
});

ReactDOM.render(<Box />,document.getElementById('box'));









