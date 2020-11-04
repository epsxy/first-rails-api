require 'test_helper'

class MessagesFlowTest < ActionDispatch::IntegrationTest
  test "should get messages" do
    get "/api/messages"

    assert_response :success
    assert_equal @response.status, 200

    messages = ActiveSupport::JSON.decode @response.body
    assert_equal messages.length, 2
    assert_equal messages[0]["author"], "Yoda"
    assert_equal messages[0]["recipient"], "Obi-Wan Kenobi"
    assert_equal messages[0]["private"], false
    assert_equal messages[0]["content"], "The force is strong in this one."
    assert_equal messages[1]["author"], "Obi-Wan Kenobi"
    assert_equal messages[1]["recipient"], "Anakin Skywalker"
    assert_equal messages[1]["private"], true
    assert_equal messages[1]["content"], "Be mindful of your thoughts, Anakin, they betray you."
  end

  test "should get message" do
    get "/api/messages/2"

    assert_response :success
    assert_equal @response.status, 200

    message = ActiveSupport::JSON.decode @response.body
    assert_equal message["author"], "Obi-Wan Kenobi"
    assert_equal message["recipient"], "Anakin Skywalker"
    assert_equal message["private"], true
    assert_equal message["content"], "Be mindful of your thoughts, Anakin, they betray you."
    print
  end

  test "should post message" do
    post "/api/messages", params: { 
      message: {
        author: "Nietzsche",
        private: false,
        content: "Thoughts are the shadows of our feelings -- always darker, emptier and simpler.",
        recipient: "Everyone"
      }
    }

    assert_response :success
    assert_equal @response.status, 201

    messages = Message.all
    assert_equal messages.length, 3
  end

  test "should update message" do
    put "/api/messages/2", params: {
      message: {
        author: "Sylvanas Windrunner",
        content: "All their hope dies with you.",
        recipient: "Varok Saurfang",
        private: false
      }
    }

    assert_response :success
    assert_equal @response.status, 200

    assert_equal Message.all.length, 2
    message = Message.find(2)
    assert_equal message.author, "Sylvanas Windrunner"
    assert_equal message.recipient, "Varok Saurfang"
    assert_equal message.content, "All their hope dies with you."
    assert_equal message.private, false
  end

  test "should delete all messages" do
    delete "/api/messages"

    assert_response :success
    assert_equal @response.status, 204

    messages = Message.all
    assert_equal messages.length, 0
  end

  test "should delete message" do
    delete "/api/messages/2"

    assert_response :success
    assert_equal @response.status, 204

    messages = Message.all
    assert_equal messages.length, 1
    assert_equal messages[0].author, "Yoda"
    assert_equal messages[0].content, "The force is strong in this one."
    assert_equal messages[0].recipient, "Obi-Wan Kenobi"
    assert_equal messages[0].private, false
  end
end
