<h1>編集</h1>
<a href="{{route('member.show',['id'=>$member->id])}}">{{ __('詳細に戻る') }}</a>
<form method="POST" action="{{route('member.update',['id' =>$member->id])}}">
    @csrf

    <div>
        名前
        <input type="text" name=name value="{{$member->name}}">
    </div>

    <div>
        電話番号
        <input type="text" name=telephone value="{{$member->telephone}}">
    </div>

    <div>
        メールアドレス
        <input type="text" name=email value="{{$member->email}}">
    </div>


    <input type="submit" value="更新する">

    <input type="submit" value="更新する">

</form>
