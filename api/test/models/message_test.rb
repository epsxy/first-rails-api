require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  test "should save a message" do
    message = Message.new({ 
      author: 'Yoda',
      recipient: 'Obi-Wan',
      private: false,
      content: 'Strong is the Force'
    })
    assert message.save
  end

  test "should not save a message without an author" do
    message = Message.new({ 
      recipient: 'Yoda',
      private: false,
      content: 'Strong is the Force'
    })
    assert_not message.save
  end

  test "should not save a message without a recipient" do
    message = Message.new({ 
      author: 'Yoda',
      private: false,
      content: 'Strong is the Force'
    })
    assert_not message.save
  end

  test "should not save a message without a privacy" do
    message = Message.new({ 
      author: 'Yoda',
      recipient: 'Obi-Wan',
      content: 'Strong is the Force'
    })
    assert_not message.save
  end

  test "should not save a message without a content" do
    message = Message.new({ 
      author: 'Yoda',
      recipient: 'Obi-Wan',
      private: true
    })
    assert_not message.save
  end
end
